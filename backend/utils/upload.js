const multer = require('multer')
const path = require('path');
const mkdirp = require('mkdirp');
const ownerAvatarDir = path.join(__dirname, '../uploads/ownerAvatars/');
const houseCoverImagesDir = path.join(__dirname, '../uploads/houseCoverImages/');
const userAvatarDir = path.join(__dirname, '../uploads/userAvatarDir/');
const adminAvatarDir = path.join(__dirname, '../uploads/adminAvatarDir/');

module.exports = {
    // owner avatar
    ownerAvatarUpload: multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const made = mkdirp.sync(ownerAvatarDir);
                cb(null, ownerAvatarDir)
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        })
    }),

    // house cover
    houseUpload: multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const made = mkdirp.sync(houseCoverImagesDir);
                cb(null, houseCoverImagesDir)
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        })
    }),


    // user avatar
    userUpload: multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const made = mkdirp.sync(userAvatarDir);
                cb(null, userAvatarDir)
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        })
    }),

    // admin avatar
    adminUpload: multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const made = mkdirp.sync(adminAvatarDir);
                console.log(made);
                cb(null, adminAvatarDir)
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        })
    }),

}