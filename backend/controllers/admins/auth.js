const OTP = require("../../models/OTP")
const Admin = require("../../models/Admin")
const { StatusCodes } = require('http-status-codes');
const randKey = require("random-key");
const jwt = require("jsonwebtoken")

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createSendToken = (admin, authStatus, msg, statusCode, req, res) => {   // authStatus -> success or failure
    const token = signToken(admin._id);

    res.cookie('jwt', token, {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });

    // Remove password from output
    admin.password = undefined;

    res.status(statusCode).json({
        status: authStatus,
        msg,
        token,
        data: {
            admin
        }
    });
};


const sendOTPCode = async (phone, req, res) => {
    const code = randKey.generateDigits(5);
    let otp = await OTP.findOne({ phone })


    if (otp) {
        otp.code = code;
        otp.save().then((data) => {
            res.status(200).json(data)
        }).catch((error) => {
            res.status(400).json(error)
        })
    } else {
        let newOtp = await OTP.create({
            phone: phone,
            code
        })

        if (newOtp) {
            res.status(201).json({
                msg: "otp code created",
                code: newOtp
            })
        } else {
            res.status(400).json({
                msg: "otp code not created"
            })
        }

    }

};


// *** admins auth ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # admin login -> POST -> admin -> PRIVATE
// @route = /api/admins/auth/login
exports.login = async (req, res) => {
    let { phone, password } = req.body

    try {

        let admin = await Admin.findOne({ phone }).select('+password');


        if (!admin || !(await admin.correctPassword(password, admin.password))) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                status: 'failure',
                msg: "شماره تلفن یا پسورد نادرست است"
            })
        }
        createSendToken(admin, 'success', 'ادمین با موفقیت وارد سایت شد', 201, req, res)


    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }

}

// *** admins auth ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # admin login -> POST -> admin -> PRIVATE
// @route = /api/admins/auth/register
exports.register = async (req, res) => {
    let { phone, password } = req.body

    if (!phone || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: 'failure',
            msg: "همه فیلدها باید وارد شود"
        })
    }

    try {
        let admin = await Admin.findOne({ phone: phone })

        if (admin) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "ادمین وجود دارد. باید وارد سایت شوید!"
            })
        }

        let newadmin = await Admin.create({ phone, password })

        if (newadmin) {
            createSendToken(newadmin, 'success', 'ادمین با موفقیت ثبت نام شد', 201, req, res)
        }

    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}


exports.sendOtp = async (req, res) => {
    try {
        let { phone } = req.body
        let admin = await Admin.findOne({ phone })

        if (admin) {
            await sendOTPCode(phone, req, res)
        } else {
            res.status(404).json({
                stauts: 'success',
                msg: "admin not found",
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

exports.verifyOtp = async (req, res) => {
    try {
        let { phone, code } = req.body

        let adminOtp = await OTP.findOne({ phone })
        let admin = await Admin.findOne({ phone })
        if (adminOtp.code === code) {
            createSendToken(admin, 'success', "کد تایید شد", 200, req, res)
        } else {
            res.status(404).json({
                msg: "کد وارد شده اشتباه است!"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.status(200).json({ status: 'success' });
}

exports.forgotPassword = (req, res) => {
    res.send("admins forgot password")
}

exports.resetPassword = (req, res) => {
    res.send("admins reset password")
}

exports.changePassword = (req, res) => {
    res.send("admins change password")
}