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
import { FaMountainCity } from "react-icons/fa6";

import { FiPhone } from "react-icons/fi";
import { FaTreeCity } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { IoFastFoodOutline } from "react-icons/io5";
import { GoNumber } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { TbClockHour12 } from "react-icons/tb";
import { PiChefHatLight } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";

function CookSettings() {

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
        dispatch(showNotification({ message: "اطلاعات غذادار ویرایش شد", status: 1 }))
    }

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType)
    }


    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    return (
        <>

            <TitleCard title="ثبت اطلاعات غذادار" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* <InputText labelTitle="تلفن ثابت" placeholder="تلفن ثابت" updateFormValue={updateFormValue} />
                    <InputText labelTitle="استان-شهر" placeholder="استان-شهر" updateFormValue={updateFormValue} />
                    <InputText labelTitle="آدرس" placeholder="آدرس" updateFormValue={updateFormValue} />
                    <InputText labelTitle="توانایی پخت چند پرس غذا در روز" placeholder="توانایی پخت چند پرس غذا در روز" updateFormValue={updateFormValue} />
                    <InputText labelTitle="چه غذاهایی می توانید درست کنید" placeholder="چه غذاهایی می توانید درست کنید" updateFormValue={updateFormValue} />
                    <InputText labelTitle="تعداد" placeholder="تعداد" updateFormValue={updateFormValue} />
                    <InputText labelTitle="تاریخ روزهایی که می توانید غذا درست کنید" placeholder="تاریخ روزهایی که می توانید غذا درست کنید" updateFormValue={updateFormValue} />
                    <InputText labelTitle="ساعت هایی روزهایی که می توانید غذا درست کنید" placeholder="تاریخ روزهایی که می توانید غذا درست کنید" updateFormValue={updateFormValue} />
                    <InputText labelTitle="نام سرآشپز" placeholder="نام سرآشپز" updateFormValue={updateFormValue} />
                    <InputText labelTitle="نام آشپز" placeholder="نام سرآشپز" updateFormValue={updateFormValue} />
                    <InputText labelTitle="عکس غذا" placeholder="عکس غذا" updateFormValue={updateFormValue} /> */}

                    {/* phone */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">تلفن ثابت</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FiPhone className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="تلفن ثابت" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* province */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">استان </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FaMountainCity className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="استان " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* city */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">شهر </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FaTreeCity className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="شهر " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>


                    {/*  address */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">آدرس </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <HiOutlineLocationMarker className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="آدرس " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/*  food type */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">نام غذاها  </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <IoFastFoodOutline className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="نام غذاها " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>


                    {/*  food count  */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">تعداد غذاها  </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <GoNumber className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="تعداد غذاها " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/*  food date  */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"> تاریخ پخت  </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <SlCalender className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder=" تاریخ پخت " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>


                    {/*  food hour  */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"> ساعت پخت  </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <TbClockHour12 className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder=" ساعت پخت " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/*  cook name  */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"> نام آشپز   </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <PiChefHatLight className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder=" نام آشپز  " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>


                    {/*  food image  */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">عکس غذا </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <PiBowlFood className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="عکس غذا" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>



                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>ثبت اطلاعات غذادار</button></div>
            </TitleCard>
        </>
    )
}


export default CookSettings