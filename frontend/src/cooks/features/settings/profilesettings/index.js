import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

import { RiEye2Line, RiEyeCloseLine, RiPhoneLine } from "@remixicon/react"
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { LiaUserSecretSolid } from "react-icons/lia";

function ProfileSettings() {
    const [errorMessage, setErrorMessage] = useState("")

    const [errorPhoneMessage, setErrorPhoneMessage] = useState("")
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("")

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({ message: "پروفایل ویرایش شد", status: 1 }))
    }

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType)
    }


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };


    return (
        <>

            <TitleCard title="آپدیت پروفایل" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">نام و نام خانوادگی</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <CiUser className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={name}
                                onChange={handleNameChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="نام و نام خانوادگی" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">شماره تلفن</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <RiPhoneLine className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="شماره تلفن" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">ایمیل</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <TfiEmail className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={email}
                                onChange={handleEmailChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="ایمیل" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">وظیفه</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <LiaUserSecretSolid className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={role}
                                onChange={handleRoleChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="وظیفه" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>
                </div>

                <div className="mt-2"><button className="btn bg-blue-800 w-50 text-white hover:bg-blue-900 float-right" onClick={() => updateProfile()}>ویرایش</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings