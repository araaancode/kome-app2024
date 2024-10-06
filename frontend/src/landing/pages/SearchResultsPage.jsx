import React, { useState, useEffect } from 'react';
import HouseCard from '../components/HouseCard';
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer"
import { RiTentLine, RiSearchLine, RiUser3Fill } from "@remixicon/react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

import HeaderLog from '../components/HeaderLog';

// icons
import HomeIcon from '@iconscout/react-unicons/icons/uil-home'
import BuildingOfficeIcon from '@iconscout/react-unicons/icons/uil-house-user'
import BuildingIcon from '@iconscout/react-unicons/icons/uil-building'
import SunIcon from '@iconscout/react-unicons/icons/uil-sun'
import SwimmerIcon from '@iconscout/react-unicons/icons/uil-swimmer'
import TreeIcon from '@iconscout/react-unicons/icons/uil-trees'
import StarIcon from '@iconscout/react-unicons/icons/uil-star'
import ClockIcon from '@iconscout/react-unicons/icons/uil-clock'

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

import TwitterIcon from '@iconscout/react-unicons/icons/uil-twitter'
import InstagramIcon from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedinIcon from '@iconscout/react-unicons/icons/uil-linkedin'

import Spinner from "../components/Spinner"



import PhotoCard from "../components/PhotoCard"


const itemsPerPage = 8;

const SearchResultsPage = () => {



  // search functionality
  const city = window.location.search.split("=")[1].split("&")[0]

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);


    async function searchHouses() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      try {
        const response = await axios.post('/api/users/search-houses', { city: city }, config);
        setHouses(response.data.houses)
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    searchHouses()
  }, [city])


  // page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currenthouses = houses.slice(indexOfFirstItem, indexOfLastItem);



  return (
    <>
      <HeaderLog />

      <nav style={{ margin: '5px 5px 0 5px' }} className='flex bg-white mx-20 px-5 rounded-lg justify-between h-20'>
        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiHouseLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>کلبه</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiWarehouseLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>ویلا</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiBuildingApartmentLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>آپارتمان</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiBeachBallLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>ساحلی</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiSwimmingPoolLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>استخردار</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiGlobeHemisphereEastLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>بوم گردی</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiGiftLight className="w-8 h-8 text-gray-500" />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>پیشنهاد ویژه</span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiTreeLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>باغ </span>
        </Link>

        <Link className="inline-block pb-1 border-b-4 mt-2 border-transparent hover:border-gray-300 hover:pb-0 transition-all duration-300" to="#">
          <PiSealPercentLight className='w-8 h-8 text-gray-500' />
          <span className='mt-6 text-gray-500 text-bold font-sm' style={{ fontSize: '14px' }}>تخفیف دار</span>
        </Link>

      </nav>

      <div className="border border-gray-100"></div>

      {loading ? (<Spinner />) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {currenthouses ? (currenthouses.map(house => (
              <PhotoCard key={house._id} house={house} images={house.images} />
              // <PhotoCard key={index} images={houses[index].images} house={houses[index]} />
            ))) : (
              <h1>نتیجه ای پیدا نشد</h1>
            )}
          </div>
          <div className="flex justify-center mt-4">
            {Array(Math.ceil(houses.length / itemsPerPage)).fill().map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-1 border rounded-full mb-8 ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}


      <Footer />
    </>
  );
};

export default SearchResultsPage;
