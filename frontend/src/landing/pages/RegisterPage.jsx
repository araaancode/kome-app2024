import React, { useState, useEffect } from 'react';
import { RiEyeLine, RiEyeOffLine, RiLoader2Fill } from '@remixicon/react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Spinner from "../components/Spinner"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RiEye2Line, RiEyeCloseLine, RiPhoneLine } from "@remixicon/react"
import { MdOutlineSms } from "react-icons/md";

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);


  const [errorPhoneMessage, setErrorPhoneMessage] = useState("")
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("")

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };


  const navigate = useNavigate()


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const register = (e) => {
    e.preventDefault()

    if (phone && password) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }


      axios.post('/api/users/auth/register', { phone, password }, config).then((data) => {
        console.log(data.data.msg);
        toast.success(data.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate('/login')
        }, 2000);
      }).catch((errMsg) => {
        console.log(errMsg);
        toast.error(errMsg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })


    } else {
      toast.error('!!لطفا همه فیلدها را وارد کنید', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }



  return (
    <div dir="rtl" className="flex justify-center items-center h-screen bg-gray-50 shadow-md">
     <div className="w-full max-w-md px-10 space-y-4 bg-white rounded border">
        <div className='flex flex-col bg-white px-4 sm:px-6 md:px-6 lg:px-6 py-6 w-full max-w-md m-auto'>
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">ثبت نام در سایت </div>
          <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
            <span>ثبت نام با ایمیل</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">یا ثبت نام با شماره تلفن </span>
            </div>
          </div>
        </div>
        <p className='text-center text-gray-500 mt-1 mb-4'>برای ثبت نام شماره موبایل خود را وارد کنید. </p>
        <form className="space-y-4" onSubmit={register}>
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
          <div>
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
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded mb-4 p-2 text-white bg-blue-800 hover:bg-blue-900"
          >
            {loading ? <RiLoader2Fill /> : 'ثبت نام'}
          </button>
          <p style={{ marginBottom: '20px' }} className='text-sm text-gray-800'>حساب دارید؟ <a href='/login' className='hover:text-blue-800 hover:cursor-pointer'>ورود </a></p>
        </form>
      </div>

      <ToastContainer />
    </div >
  );
};

export default LoginPage;