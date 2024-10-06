import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

import { RiEye2Line, RiEyeCloseLine, RiPhoneLine } from "@remixicon/react"
import { IoColorPaletteOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { LuBus } from "react-icons/lu";
import { BsCardHeading } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { RxBoxModel } from "react-icons/rx";
import { MdOutlineWhatshot } from "react-icons/md";
import { IoSnowOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import { FiCalendar } from "react-icons/fi";
import { FaMountainCity } from "react-icons/fa6";
import { FaTreeCity } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
import { TbClockHour3 } from "react-icons/tb";
import { TbClockHour4 } from "react-icons/tb";
import { LiaBusSolid } from "react-icons/lia";

function DriverSettings() {

    const [color, setColor] = useState("")
    const [phone, setPhone] = useState("")

    const [errorPhoneMessage, setErrorPhoneMessage] = useState("")

    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({ message: "اطلاعات راننده ویرایش شد", status: 1 }))
    }

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };


    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };


    return (
        <>

            <TitleCard title="ثبت اطلاعات راننده" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* <InputText labelTitle="رنگ وسیله" placeholder="رنگ وسیله" updateFormValue={updateFormValue} />
                    <InputText labelTitle="نوع وسیله" placeholder="نوع وسیله" updateFormValue={updateFormValue} />
                    <InputText labelTitle="پلاک" placeholder="پلاک" updateFormValue={updateFormValue} />
                    <InputText labelTitle="نام صاحب خودرو" placeholder="نام صاحب خودرو" updateFormValue={updateFormValue} />
                    <InputText labelTitle="تعداد ظرفیت" placeholder="تعداد ظرفیت" updateFormValue={updateFormValue} />
                    <InputText labelTitle="مدل ماشین" placeholder="مدل ماشین" updateFormValue={updateFormValue} />
                    <InputText labelTitle="گرمایش" placeholder="گرمایش" updateFormValue={updateFormValue} />
                    <InputText labelTitle="سرمایش" placeholder="سرمایش" updateFormValue={updateFormValue} />
                    <InputText labelTitle="هزینه" placeholder="هزینه" updateFormValue={updateFormValue} />
                    <InputText labelTitle="تاریخ" placeholder="تاریخ" updateFormValue={updateFormValue} />
                    <InputText labelTitle="مشخص کردن مبدا و مقصد" placeholder="مشخص کردن مبدا و مقصد" updateFormValue={updateFormValue} />
                    <InputText labelTitle="تاریخ سرویس دادن" placeholder="تاریخ سرویس دادن" updateFormValue={updateFormValue} />
                    <InputText labelTitle="ساعت حرکت" placeholder="ساعت حرکت" updateFormValue={updateFormValue} />
                    <InputText labelTitle="ساعت رسیدن به مقصد" placeholder="ساعت رسیدن به مقصد" updateFormValue={updateFormValue} />
                    <InputText labelTitle="نام شرکت ارائه دهنده سرویس" placeholder="نام شرکت ارائه دهنده سرویس" updateFormValue={updateFormValue} />
                    <InputText labelTitle="برای بحث مالی" placeholder="برای بحث مالی" updateFormValue={updateFormValue} /> */}

                    {/* color */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">رنگ وسیله</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <IoColorPaletteOutline className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={color}
                                onChange={handleColorChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="رنگ وسیله" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                     {/* type */}
                     <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">نوع وسیله</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <LuBus className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={color}
                                onChange={handleColorChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="نوع وسیله" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* pelak */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">پلاک </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <BsCardHeading className="w-6 h-6 text-gray-400"  />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="پلاک " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* name */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">نام صاحب خودرو </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FaRegUserCircle className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="نام صاحب خودرو " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* capacity */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">تعداد ظرفیت </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <MdOutlineReduceCapacity className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="تعداد ظرفیت " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* model */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">مدل ماشین </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <RxBoxModel className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="مدل ماشین " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* heat */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">گرمایش </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <MdOutlineWhatshot className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="گرمایش " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* coldness */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">سرمایش </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <IoSnowOutline className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="سرمایش " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* cost */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"> هزینه</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <TfiMoney className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder=" هزینه" />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* date */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">تاریخ </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FiCalendar  className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="تاریخ " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* first city */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">مبدا </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FaMountainCity className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="مبدا " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* last city */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">مقصد </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <FaTreeCity  className="w-6 h-6 text-gray-400"  />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="مقصد " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* moving date */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">تاریخ حرکت </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <BsCalendar3 className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="تاریخ حرکت " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* start hour */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">ساعت حرکت </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <TbClockHour3 className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="ساعت حرکت " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* end hour */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">ساعت رسیدن </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <TbClockHour4 className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="ساعت رسیدن " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>

                    {/* service name */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">نام سرویس </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <LiaBusSolid className="w-6 h-6 text-gray-400" />
                            </div>
                            <input style={{ borderRadius: '5px' }} type="text" value={phone}
                                onChange={handlePhoneChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="نام سرویس " />
                        </div>
                        <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
                    </div>


                </div>

                <div className="mt-6"><button className="btn bg-blue-800 hover:bg-blue-900 text-white float-right" onClick={() => updateProfile()}>ثبت اطلاعات راننده</button></div>
            </TitleCard>
        </>
    )
}


export default DriverSettings