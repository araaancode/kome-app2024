import { useState } from "react";
import Image from "./Image";
import { RiGridFill } from "@remixicon/react"

const houseImageUrl = 'https://via.placeholder.com/150';


export default function HouseGallery({ house }) {

  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const images = house.images


  if (showAllPhotos) {
    return (
      <div dir="rtl" className="absolute inset-0 text-white min-h-screen ">
        <div className="bg-white grid gap-4">
          <div>
            <button onClick={() => setShowAllPhotos(false)} className="mt-8 mb-2 mx-auto flex gap-1 py-4 px-4 rounded-2xl shadow shadow-black bg-white text-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
              بستن تصاویر
            </button>
          </div>
          {/* {house?.images?.length > 0 && house.images.map(image => ( */}
          <div className="container mx-auto p-4">
            {/* First Row */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <img src={images[0]} alt={house.name} className="w-full" />
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img style={{ height: '350px' }} src={images[1]} alt={house.name} className="w-full" />
              <img style={{ height: '350px' }} src={images[2]} alt={house.name} className="w-full" />
            </div>
            {/* Third Row */}
            <div className="grid grid-cols-1 gap-4">
              <img src={images[3]} alt={house.name} className="w-full" />
            </div>
          </div>
          {/* ))} */}

        </div>
      </div>
    );
  }

  return (
    <div className="relative">

      {/* <div className="grid gap-2 grid-cols-3 overflow-hidden mx-8">
        <div>
          {house.images?.[0] && (
            <div>
              <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={house.images[0]} alt="" />
            </div>
          )}
        </div>
        <div className="grid">
          {house.images?.[1] && (
            <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={house.images[1]} alt="" />
          )}
          <div className="overflow-hidden">
            {house.images?.[2] && (
              <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={house.images[2]} alt="" />
            )}
          </div>
          <div className="overflow-hidden">
            {house.images?.[3] && (
              <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={house.images[3]} alt="" />
            )}
          </div>
        </div>
      </div> */}

      <div className="flex px-8 items-center">
        {/* <div className="w-1/2 p-2 relative group">
          <Image onClick={() => setShowAllPhotos(true)} className="w-full hover:cursor-pointer h-full object-cover" src={house.cover} alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div> */}

        {/* <div className="relative group w-64 h-64">
            <img src={house.cover} alt="Your Image" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
          </div> */}
        {/* </div> */}

        <div style={{ height: '485px' }} className="relative group">
          <img style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} src={house.cover} alt="" className="w-full h-full object-cover" />
          <div style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 hover:cursor-pointer"></div>
        </div>

        {/*  */}
        <div className="w-1/4 px-1 my-3 ml-1 flex flex-col justify-between">
          <div className="relative group h-1/2 mb-2">
            <img src={house.images[0]} alt="" style={{ height: '238px' }} className="w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 hover:cursor-pointer"></div>
          </div>
          <div className="relative group h-1/2">
            <img src={house.images[1]} alt="" style={{ height: '238px' }} className="w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 hover:cursor-pointer"></div>
          </div>
        </div>
        <div className="w-1/4 px-1 my-3 flex flex-col justify-between">
          <div className="relative group h-1/2 mb-2">
            <img src={house.images[2]} alt="" style={{ height: '238px', borderTopRightRadius: '20px' }} className="w-full object-cover" />
            <div style={{ height: '238px', borderTopRightRadius: '20px' }} className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 hover:cursor-pointer"></div>
          </div>
          <div className="relative group h-1/2">
            <img src={house.images[3]} alt="" style={{ height: '238px', borderBottomRightRadius: '20px' }} className="w-full object-cover" />
            <div style={{ height: '238px', borderBottomRightRadius: '20px' }} className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 hover:cursor-pointer"></div>
          </div>
        </div>
      </div>
      <button style={{ borderRadius: '5px' }} onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 pr-2 mx-10 my-4 bg-white rounded-2xl border border-black shadow shadow-md shadow-gray-500">
        <RiGridFill className="mx-2" />
        دیدن همه عکس ها
      </button>
    </div>
  );
}