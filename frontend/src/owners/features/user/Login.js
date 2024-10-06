import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'

import { RiEye2Line, RiEyeCloseLine, RiPhoneLine } from "@remixicon/react"

function Login() {


    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [errorPhoneMessage, setErrorPhoneMessage] = useState("")
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("")

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (phone.trim() === "") return setErrorPhoneMessage("* شماره تلفن ضروری است")
        if (password.trim() === "") return setErrorPasswordMessage("* پسورد ضروری است")


        else {
            setLoading(true)
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/drivers/welcome'
        }
    }




    return (
        <div className="min-h-screen bg-gray-50 flex items-center text-right">
            <div className="card mx-auto w-full max-w-5xl shadow-2xl">
                <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                    <div className=''>
                        <div className="hero min-h-full rounded-l-xl bg-base-200">
                            <div className="hero-content py-8">
                                <div className="max-w-md">
                                    <h1 className="mb-10 text-center font-bold text-lg"> ورود به پنل ملک دار</h1>
                                    <div className="text-center mt-0 mb-35"><img src="https://media.istockphoto.com/id/909613994/photo/camping.webp?b=1&s=170667a&w=0&k=20&c=QAOWQ_ywegq2PA4sZdLitz6ljL_kW-zw3DBOvvA_uXg=" alt="اقامتگاه" className="w-full rounded rounded-lg inline-block shadow-md"></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 w-full max-w-md m-auto">
                        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">ورود به پنل ملک دار</div>
                        <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
                            <span>ورود با ایمیل</span>
                        </button>
                        <div className="relative mt-10 h-px bg-gray-300">
                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                <span className="bg-white px-4 text-xs text-gray-500 uppercase">یا ورود با شماره تلفن </span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <form onSubmit={(e) => submitForm(e)}>
                                <div className="flex flex-col mb-6">
                                    <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">شماره تلفن</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                            <RiPhoneLine />
                                        </div>
                                        <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                            onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="شماره تلفن" />
                                    </div>
                                    <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                                </div>
                                <div className="flex flex-col mb-1">
                                    <div className="mb-2 relative">
                                        <label className="block mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="password">
                                            پسورد
                                        </label>

                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            id="password"
                                            onChange={handlePasswordChange}
                                            value={password}
                                            className="w-full px-4 py-2 border border-gray-400 placeholder-gray-400 rounded-sm focus:outline-none focus:border-blue-800"
                                            placeholder="پسورد"
                                            style={{ borderRadius: '5px' }}
                                        />

                                        <div
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 left-3 flex items-center cursor-pointer top-6"
                                        >
                                            {passwordVisible ? (
                                                <RiEye2Line className='text-gray-400' />
                                            ) : (
                                                <RiEyeCloseLine className='text-gray-400' />
                                            )}
                                        </div>
                                        <span className='text-red-500 relative text-sm'>{errorPasswordMessage ? errorPasswordMessage : ""}</span>


                                    </div>
                                    <div className="flex items-center mb-6">
                                        <div className="flex ml-auto">
                                            <a href="/owners/forgot-password" className="inline-flex text-xs font-bold sm:text-sm text-blue-800 hover:text-blue-900">پسورد خود را فراموش کردید؟</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex w-full">
                                    <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-800 hover:bg-blue-900 rounded py-2 w-full transition duration-150 ease-in">
                                        <span className="mr-2 uppercase">ورود</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='text-center mt-4'>حساب ندارید؟ <a href="/owners/register" className='no-underline hover:text-blue-900'><button className="inline-block hover:cursor-pointer transition duration-200"> ثبت نام </button></a></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login