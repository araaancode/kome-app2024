import React, { useState } from 'react'
import { RiTentLine, RiUser3Fill, RiSearchLine, RiMenuLine } from "@remixicon/react";
import { FaUserCircle, FaSearch, FaHome } from 'react-icons/fa';
import { PiSpinnerBold } from "react-icons/pi";

import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const cities = [
    "arak",
    "ardebil",
    "oromieh",
    "isfahan",
    "ahvaz",
    "elam",
    "bognord",
    "bandar_abbas",
    "boshehr",
    "birgand",
    "tabriz",
    "tehran",
    "khoram_abad",
    "rasht",
    "zahedan",
    "zanjan",
    "sari",
    "semnan",
    "sanandaj",
    "sharekord",
    "shiraz",
    "ghazvin",
    "ghom",
    "karaj",
    "kerman",
    "kermanshah",
    "gorgan",
    "mashhad",
    "hamedan",
    "yasoj",
    "yazd",
];


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


const HeaderLog = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState(null);
    const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null

    const searchHouse = async (e) => {
        e.preventDefault()

        if (city === null) {
            toast.error(" شهر باید وارد شود!", {
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

            try {
                const res = await axios.post('/api/users/search-houses', { city: convertCityPersianToEnglish(city) });
                navigate(`/search-houses?city=${convertCityPersianToEnglish(city)}`);

                console.log(res);
            } catch (err) {
                toast.error("جستجوی شما نتیجه ای نداشت!!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setError(err);
            } finally {
                setLoading(false);
            }
        }
    }


    return (
        <>
            <header className="flex items-center justify-between p-4">
                {/* Site Icon on the right */}
                <div className="flex items-center space-x-2 w-1/8">
                    <Link to="/">
                        <RiTentLine className="w-12 h-12" />
                    </Link>
                </div>


                {/* Search Input in the center */}
                <div className="flex mx-auto w-6/8 justify-center items-center">
                    <form action='/search-houses'>
                        <div className="relative text-gray-600">
                            <input
                                style={{ padding: '12px 20px', borderRadius: '30px', margin: '2px auto' }}
                                type="text"
                                name="city"
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="نام شهر مورد نظر را وارد کنید.."
                                className="bg-white rounded-full focus:outline-none w-full shadow rounded-full hover:shadow-md"
                            />
                            <button onClick={(e) => searchHouse(e)} type="button" className="absolute left-2 mt-2 p-3 bg-blue-800 rounded-full text-white">
                               {loading ?  <PiSpinnerBold className='text-sm' /> :  <FaSearch className='text-sm' />}
                            </button>
                        </div>
                    </form>
                </div>

                {/* User Icon on the left */}
                <Link to={userToken ? '/profile' : '/login'}>
                    <div style={{ width: '120px', height: '60px' }} className="flex items-center p-2 space-x-2 w-2/8 justify-end hover:border hover:rounded-full hover:shadow-lg">
                        <div className="w-10 h-10 mx-3">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/17384/17384295.png"
                                alt="Avatar"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <RiMenuLine className="w-6 h-6 font-bold" />
                    </div>
                </Link>

            </header>
            <div className="border border-gray-100"></div>
        </>
    )
}

export default HeaderLog