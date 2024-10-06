import React, { useState, useEffect, useRef } from 'react'
import ExtraLinks from '../components/ExtraLinks'
import { useNavigate } from 'react-router-dom'
import { RiUserLocationFill, RiSearchLine, RiLoader2Fill } from "@remixicon/react";
import axios from "axios"

// icons
import HomeIcon from '@iconscout/react-unicons/icons/uil-home'
import BuildingOfficeIcon from '@iconscout/react-unicons/icons/uil-house-user'
import BuildingIcon from '@iconscout/react-unicons/icons/uil-building'
import SunIcon from '@iconscout/react-unicons/icons/uil-sun'
import SwimmerIcon from '@iconscout/react-unicons/icons/uil-swimmer'
import TreeIcon from '@iconscout/react-unicons/icons/uil-trees'
import StarIcon from '@iconscout/react-unicons/icons/uil-star'
import ClockIcon from '@iconscout/react-unicons/icons/uil-clock'

import "./navbar.css"

import { Spinner } from "@material-tailwind/react";


import { BiSearch } from "react-icons/bi";

// icons 
import { PiHouseLight } from "react-icons/pi";
import { PiWarehouseLight } from "react-icons/pi";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { PiBeachBallLight } from "react-icons/pi";
import { PiSwimmingPoolLight } from "react-icons/pi";
import { PiTreeLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { PiSealPercentLight } from "react-icons/pi";
import { PiGlobeHemisphereEastLight } from "react-icons/pi";

import { SlCalender } from "react-icons/sl";
import { PiArrowLeftBold } from "react-icons/pi";

// end icons

import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// import "react-multi-date-picker/styles/colors/teal.css";
// import "react-multi-date-picker/styles/backgrounds/bg-white.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const convertCityPersianToEnglish = (city) => {

    switch (city) {
        case "اراک":
            return "arak"
            break;

        case "اردبیل":
            return "ardebil"
            break;


        case "ارومیه":
            return "oromieh"
            break;


        case "اصفهان":
            return "isfahan"
            break;

        case "اهواز":
            return "ahvaz"
            break;

        case "ایلام":
            return "elam"
            break;

        case "بجنورد":
            return "bognord"
            break;

        case "بندرعباس":
            return "bandar_abbas"
            break;

        case "بوشهر":
            return "boshehr"
            break;

        case "بیرجند":
            return "birgand"
            break;

        case "تبریز":
            return "tabriz"
            break;

        case "تهران":
            return "tehran"
            break;

        case "خرم آباد":
            return "khoram_abad"
            break;

        case "رشت":
            return "rasht"
            break;

        case "زاهدان":
            return "zahedan"
            break;

        case "زنجان":
            return "zanjan"
            break;

        case "ساری":
            return "sari"
            break;

        case "سمنان":
            return "semnan"
            break;

        case "سنندج":
            return "sanandaj"
            break;

        case "شهرکرد":
            return "sharekord"
            break;


        case "شیراز":
            return "shiraz"
            break;


        case "قزوین":
            return "ghazvin"
            break;

        case "قم":
            return "ghom"
            break;

        case "کرج":
            return "karaj"
            break;

        case "کرمان":
            return "kerman"
            break;

        case "کرمانشاه":
            return "kermanshah"
            break;


        case "گرگان":
            return "gorgan"
            break;

        case "مشهد":
            return "mashhad"
            break;

        case "همدان":
            return "hamedan"
            break;

        case "یاسوج":
            return "yasoj"
            break;

        case "یزد":
            return "yazd"
            break;

        default:
            break;
    }
}



const Navbar = () => {
    const navigate = useNavigate();
    const [checkInValue, setCheckInValue] = useState(new Date());
    const [checkOutValue, setCheckOutValue] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [houses, setHouses] = useState([])
    const [count, setCount] = useState(0)
    const [btnClick, setBtnClick] = useState(false)

    const [city, setCity] = useState(null);

    const cityChange = (e) => {
        setCity(convertCityPersianToEnglish(e.target.value));
        // console.log(convertCityPersianToEnglish(e.target.value));
    }

    const decrement = (e) => {
        setCount(count - 1)
    }


    const increment = (e) => {
        setCount(count + 1)
    }


    const [dates, setDates] = useState([null, null]);


    const searchHouse = async (e) => {
        e.preventDefault()

        if ((city === null) && (dates === null) && (count === null)) {
            toast.error("همه فیلدها باید وارد شوند!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else {
            setLoading(true);
            setError(null);

            setCity(city)

            try {
                const res = await axios.post('/api/users/search-houses', { city: city });
                setHouses(res.data.houses)
                navigate(`/search-houses?city=${city}&dates=${dates}&count=${count}`);

            } catch (err) {
                console.log(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
    }


    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const items = [
        { id: 1, image: 'https://cdn-icons-png.flaticon.com/128/15486/15486076.png', city: 'isfahan', cityName: 'اصفهان' },
        { id: 2, image: 'https://cdn-icons-png.flaticon.com/128/15486/15486062.png', city: 'shiraz', cityName: 'شیراز' },
        { id: 3, image: 'https://cdn-icons-png.flaticon.com/128/15486/15486078.png', city: 'yazd', cityName: 'یزد' },
        { id: 4, image: 'https://cdn-icons-png.flaticon.com/128/15486/15486084.png', city: 'mashhad', cityName: 'مشهد' },
        { id: 5, image: 'https://cdn-icons-png.flaticon.com/128/15486/15486074.png', city: 'tehran', cityName: 'تهران' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const changeIcon = () => {
        setBtnClick(true)
    }


    return (

        <div>
            <form action='/search-houses' onSubmit={searchHouse}>

                <div style={{
                    width: '800px',
                    marginTop: '70px'
                }} className="flex rounded-full gap-2 bg-white text-center justify-between m-auto border border-gray-300 rounded-full px-4 py-2 mb-5" >
                    {/* <div className="flex items-center justify-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 w-6 h-6">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                        </svg>
                        <select onChange={cityChange} id="city" name='city' className="bg-white focus:shadow-outline focus:outline-none w-100" defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled>
                                شهر
                            </option>
                            <option style={{marginTop:'5px'}} value="arak">اراک</option>
                            <option value="ardebil">اردبیل</option>
                            <option value="oromieh">ارومیه</option>
                            <option value="isfahan">اصفهان</option>
                            <option value="ahvaz">اهواز</option>
                            <option value="elam">ایلام</option>
                            <option value="bognord">بجنورد</option>
                            <option value="bandar_abbas">بندرعباس</option>
                            <option value="bosher">بوشهر</option>
                            <option value="birgand">بیرجند</option>
                            <option value="tabriz">تبریز</option>
                            <option value="tehran">تهران</option>
                            <option value="khoram_abad">خرم آباد</option>
                            <option value="rasht">رشت</option>
                            <option value="zahedan">زاهدان</option>
                            <option value="zanjan">زنجان</option>
                            <option value="sari">ساری</option>
                            <option value="semnan">سمنان</option>
                            <option value="sanandaj">سنندج</option>
                            <option value="sharekord">شهرکرد</option>
                            <option value="shiraz">شیراز</option>
                            <option value="ghazvin">قزوین</option>
                            <option value="ghom">قم</option>
                            <option value="karaj">کرج</option>
                            <option value="kerman">کرمان</option>
                            <option value="kermanshah">کرمانشاه</option>
                            <option value="gorgan">گرگان</option>
                            <option value="mashhad">مشهد</option>
                            <option value="hamedan">همدان</option>
                            <option value="yasoj">یاسوج</option>
                            <option value="yazd">یزد</option>

                        </select>
                    </div> */}

                    <div className='flex items-center justify-center'>

                        <div className="relative inline-block mx-auto" ref={dropdownRef}>
                            <div className="rounded p-1 bg-white">
                                <button
                                    className="flex items-center w-full justify-between"
                                    onClick={(e) => setIsOpen(!isOpen)}
                                    aria-haspopup="true"
                                    aria-expanded={isOpen}
                                >
                                    {/* {city ? (
                                        <span className="flex items-center">
                                            {city.image ? (
                                                <div className='flex items-center' style={{width:'150px'}}>
                                                    <img
                                                        src={city.image}
                                                        alt={city.city}
                                                        className="w-14 h-14 rounded-full mr-2"
                                                    />
                                                    {city.cityName}
                                                </div>

                                            ) : (
                                                <div className='flex items-center' style={{width:'150px'}}>
                                                    <img
                                                        src="https://cdn-icons-png.flaticon.com/128/921/921439.png"
                                                        alt={city}
                                                        className="w-12 h-12 rounded-full mx-2"
                                                    />
                                                    {convertCityPersianToEnglish(city)}
                                                </div>
                                            )}


                                        </span>
                                    ) : (
                                        <div className='flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 w-6 h-6">
                                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                            </svg>
                                            <input onChange={cityChange} style={{ fontSize: '18px', width: '100px' }} className="mx-2 my-4 focus:outline-none" placeholder='شهر' />
                                        </div>
                                    )}
                                    <svg
                                        className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 w-6 h-6">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                    <input onChange={cityChange} style={{ fontSize: '18px', width: '100px' }} className="mx-2 my-4 focus:outline-none" placeholder='شهر' />

                                </button>

                                {/* {isOpen && (

                                    <div style={{ width: '650px', margin: '20px 25%' }}
                                        className="absolute rounded-full shadow-lg bg-white z-10 "
                                        role="listbox"
                                        aria-labelledby="dropdown-label"
                                    >
                                        <div className="grid grid-cols-5 gap-6 px-4 py-1">
                                            {items.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="flex flex-col items-center justify-center rounded-full cursor-pointer"
                                                    role="option"
                                                    aria-selected={city?.id === item.id}
                                                    onClick={() => {
                                                        setCity(item);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.city}
                                                        style={{ width: "80px", height: '80px' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                )} */}
                            </div>
                        </div>
                    </div>


                    <div className="border-l border-gray-300"></div>

                    <div style={{ fontSize: '18px', width: '260px' }} className='flex justify-center items-center'>
                        <SlCalender className='w-8 h-8 text-gray-400 ml-2' />
                        <DatePicker
                            value={dates}
                            onChange={setDates}
                            range
                            calendar={persian}
                            locale={persian_fa}
                            plugins={[<DatePanel />]}
                            placeholder="انتخاب تاریخ ورود و خروج"
                            className="blue"
                            style={{
                                fontSize: "18px",
                                padding: "3px 10px",
                                border: 'none',

                            }}
                            inputClassName="custom-input"
                            monthYearSeparator="|"
                        />

                    </div>


                    <div className="border-l border-gray-300"></div>

                    <div className='flex justify-center items-center w-30'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 w-6 h-6">
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                        <label style={{ fontSize: '18px' }} htmlFor="quantity-input" className="block mx-2 mb-2 text-sm font-medium text-gray-400">تعداد</label>
                        <div className="relative flex items-center max-w-[8rem]">

                            <button onClick={decrement} type="button" className="border rounded-full border-blue-800 px-3.5 py-4 focus:outline-none">
                                <svg className="w-3 h-3 text-blue-800 font-extrabold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>

                            <p className='mx-2'>{count <= 0 ? 0 : count}</p>

                            <button onClick={increment} type="button" className="border border-blue-800 px-3.5 py-4 rounded-full focus:outline-none">
                                <svg className="w-3 h-3 text-blue-800 font-extrabold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>

                        </div>
                    </div>

                    <div className="border-l border-gray-300 w-100"></div>
                    <button onClick={changeIcon} type='submit' className="bg-primary text-white py-2 px-5 rounded-full">
                        {btnClick ? (

                            <div role="status">
                                <svg aria-hidden="true" class="w-6 h-6 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>

                        ) : <BiSearch className='w-6 h-6 font-bold' />}
                    </button>


                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Navbar