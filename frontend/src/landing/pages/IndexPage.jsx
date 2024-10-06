import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../components/Image.jsx";
import Navbar from "../components/Navbar.jsx"
import PhotoSlider from "../components/PhotoSlider.jsx";
import North from "../components/North.jsx"
import Center from "../components/Center.jsx"
import ArrowLeftIcon from '@iconscout/react-unicons/icons/uil-angle-left.js'
import ArrowRightIcon from '@iconscout/react-unicons/icons/uil-angle-right.js'

import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import PhotoCard from "../components/PhotoCard"
import Spinner from "../components/Spinner"



const images = [
  'https://a0.muscache.com/im/pictures/0130ccbf-d3ec-407e-bb02-0e35754ced61.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1049362398343619920/original/3d8fdec5-2501-4b45-8cd5-6f10ea1dfdb0.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/21b39a28-901d-40cb-8652-f59b6db4219b.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/a4412ff4-22fb-401b-99b4-45fbb2e62d19.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d40fee07-6462-4f6b-95ec-fc7ef759b623.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-865707200364012433/original/d3680419-95c6-471e-baf7-717c401c314f.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzcwMDgwOTUxNzU3Mzc4MTUw/original/c7aeed4c-a11d-4447-96ca-e78c886d5a69.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/74634b50-1119-43e8-be2d-a467ae2ba342.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1129772018868233070/original/1266517c-44d1-4979-be14-585edf3616ec.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/6f61efe3-23b7-4115-9d0e-db9901d78f68.jpg?im_w=720',
  'https://www.homsa.net/images/rooms/52449/21524491690111515__330x183.jpg',
  'https://www.homsa.net/images/rooms/31294/10312941692602374__330x183.jpg',
  'https://www.homsa.net/images/rooms/87774/40877741714243892__330x183.jpg',
  'https://a0.muscache.com/im/pictures/a04d9dad-9704-49e4-8829-71293299f7fb.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-52467593/original/45f1fc91-dd83-44fe-b23e-8a264d8216bc.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-52747997/original/660e23d0-9eb2-4679-92de-741645837e44.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/84e1ad50-c6d2-4aed-b086-3d682b832f4f.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48112717/original/383dd856-483f-48cb-83ce-076fe676cf19.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/63614626/36779d8e_original.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1126122443984195882/original/31cc9a17-b777-48f8-a390-52bfcc5cc5c8.jpeg?im_w=720',
  'https://www.gannett-cdn.com/presto/2019/10/11/PNAS/adf1101a-0f8c-404f-9df3-5837bf387dfd-1_Exterior_House_Beautiful_Whole_Home_Concept_House_Castle_Homes_Photo_Reed_Brown_Photography.jpg?crop=4501,3376,x559,y0'
];


const favoriteCities = [
  { src: 'https://wallpapercave.com/wp/wp6685714.jpg', text: 'مشهد' },
  { src: 'https://img.atlasobscura.com/17qqfEaiWbZm3XMesvR4DIA_dwolzvAhEl8ZjfJ3J08/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9iMzQ4/OTU3ZC04ZjQ5LTRj/ZTctYTIyMi0xMTdi/NTgxNWUyMmRkYTUy/YTI2ZTM3N2QzN2Jl/MjlfRzA5MkVFLmpw/Zw.jpg', text: 'شیراز' },
  { src: 'https://wallpapercave.com/wp/wp6556196.jpg', text: 'اصفهان' },
  { src: 'https://media.gettyimages.com/id/674934387/de/foto/iran-yazd-windtower.jpg?s=612x612&w=0&k=20&c=hCZKs0r-u3-7YTa9WE8p11-fwXIZ8GycRlXtuHc6LjE=', text: 'یزد' },
  { src: 'https://media.gettyimages.com/id/985045956/de/foto/saat-tower-the-tabriz-municipal-palace-iran.jpg?s=612x612&w=0&k=20&c=fJJ4sGQ1zvZSjvUccWKG3QeE7wNQwhMbpt_7dV_GykA=', text: 'تبریز' },
  { src: 'https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2022/10/001-1.jpg', text: 'اهواز' },
  { src: 'https://itto.org/iran/image-bin/khosroabad-garden-sanandaj.jpg?fillit=450x330', text: 'سنندج' },
  { src: 'https://cdn.balad.ir/crowd-images/all/original/53f3b20062fc4e6d870b1f0dc4eaef33-ei_1642309135241.jpg?x-img=v1/crop,x_480,y_0,w_3468,h_3468/resize,h_360/format,type_webp,lossless_false/autorotate', text: 'رشت' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%D8%A8%D8%B1%D8%AC_%D8%B1%D8%B3%DA%A9%D8%AA_%D8%AE%D8%B4%D8%AA%DB%8C_%D9%85%DB%8C%D8%A7%D9%86_%D8%AC%D9%86%DA%AF%D9%84.jpg/250px-%D8%A8%D8%B1%D8%AC_%D8%B1%D8%B3%DA%A9%D8%AA_%D8%AE%D8%B4%D8%AA%DB%8C_%D9%85%DB%8C%D8%A7%D9%86_%D8%AC%D9%86%DA%AF%D9%84.jpg', text: 'ساری' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bonyad-e_Pahlavi_Hotel_2019-11-05.jpg/255px-Bonyad-e_Pahlavi_Hotel_2019-11-05.jpg', text: 'رامسر' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/JHK_Kerman_Hradby1.jpg/220px-JHK_Kerman_Hradby1.jpg', text: 'کرمان' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/%D9%85%D8%B3%D8%AC%D8%AF_%D9%85%DA%A9%DB%8C.jpg/220px-%D9%85%D8%B3%D8%AC%D8%AF_%D9%85%DA%A9%DB%8C.jpg', text: 'زاهدان' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/QomPanorama.JPG/750px-QomPanorama.JPG', text: 'قم' },
  { src: 'https://upload.wikimedia.org/wikipedia/fa/thumb/3/36/Shahr_yer0.jpg/240px-Shahr_yer0.jpg', text: 'اردبیل' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%DA%A9%D8%B4%D8%AA%DB%8C_%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84_%D8%AF%D8%B1_%D8%A8%D9%86%D8%AF%D8%B1_%D8%A8%D9%88%D8%B4%D9%87%D8%B1_1.jpg/220px-%DA%A9%D8%B4%D8%AA%DB%8C_%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84_%D8%AF%D8%B1_%D8%A8%D9%86%D8%AF%D8%B1_%D8%A8%D9%88%D8%B4%D9%87%D8%B1_1.jpg', text: 'بوشهر' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Bandarabbas-sahel-2.jpg', text: 'بندرعباس' },
  { src: 'https://upload.wikimedia.org/wikipedia/fa/thumb/8/8e/The_Greek_Ship.jpg/241px-The_Greek_Ship.jpg', text: 'کیش' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dolphins_in_Queshm_Island.jpg/250px-Dolphins_in_Queshm_Island.jpg', text: 'قشم' },
];


const cityTypes = [
  { src: 'https://www.homsa.net/images/property_types/property_type_1666423819.jpg', type: 'بوم گردی', description: 'بهترین خانه های روستایی و سنتی' },
  { src: 'https://www.homsa.net/images/property_types/property_type_1666423751.jpg', type: 'ویلا', description: 'بهترین خانه های ویلایی ' },
  { src: 'https://www.homsa.net/images/property_types/property_type_1666426645.jpg', type: 'سوییت', description: 'بهترین سوییت ها' },
  { src: 'https://www.homsa.net/images/property_types/property_type_1666423990.jpg', type: 'کلبه', description: 'بهترین کلبه ها' },
  { src: 'https://www.homsa.net/images/property_types/property_type_1666426585.jpg', type: 'آپارتمان', description: 'بهترین آپارتمان ها' },
  { src: 'https://www.homsa.net/images/property_types/property_type_1666423672.jpg', type: 'هتل آپارتمان', description: 'بهترین هتل آپارتمان ها' },
  { src: 'https://www.homsa.net/images/property_types/property_type_1666423902.jpg', type: 'مهمانپذیر', description: 'بهترین مهمانپذیر ها' },
  { src: 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww', type: 'هتل', description: 'بهترین هتل ها' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D', type: 'استخردار', description: 'بهترین استخردارها' },
  { src: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww', type: 'جنگلی', description: 'بهترین کلبه های جنگلی' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D', type: 'ساحلی', description: 'بهترین اقامتگاه های ساحلی' },
  { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D', type: 'اتاق', description: 'بهترین اتاق ها' },
];



export default function IndexPage() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // try {
    //   axios.get('/api/users/houses').then(response => {
    //     setHouses(response.data.houses.slice(0, 100));
    //   });
    // } catch (err) {
    //   console.log(err);
    //   setError(err);
    // } finally {
    //   setLoading(false);
    // }


    const getHouses = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/users/houses');
        setHouses(response.data.houses);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getHouses();
  }, [])


  // photo slider 
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 6;

  const nextSlide = () => {
    if (currentIndex < images.length - imagesPerPage) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };


  const [currentIndexCities, setCurrentIndexCities] = useState(0);
  const imagesPerPageCites = 6;


  const nextSlideCities = () => {
    if (currentIndexCities < images.length - imagesPerPageCites) {
      setCurrentIndexCities(currentIndexCities + imagesPerPageCites);
    }
  };

  const prevSlideCities = () => {
    if (currentIndexCities > 0) {
      setCurrentIndexCities(currentIndexCities - imagesPerPageCites);
    }
  };



  return (
    <>
      <Header />
      <div className="flex justify-between items-center px-8">
        <div className="text">
          <h1 className="text-gray-900 text-2xl font-bold">اجاره ویلا در مقصدهای محبوب</h1>
          <h4 className="text-gray-900 mt-1">اقامتگاه در شهرهای پرطرفدار با ما</h4>
        </div>
        <div className="buttons ">
          <button
            onClick={prevSlide}
            className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"
            disabled={currentIndex === 0}
          >
            <ArrowRightIcon />
          </button>
          <button
            onClick={nextSlide}
            className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"
            disabled={currentIndex >= images.length - imagesPerPage}
          >
            <ArrowLeftIcon />
          </button>
        </div>
      </div>


      <div className="relative w-full my-16">
        <div className="flex overflow-hidden">
          {images.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
            <img style={{ height: '300px' }} key={index} src={image} alt={`Slide ${index}`} className="w-2/6 mx-4 rounded-lg" />
          ))}
        </div>

      </div>

      <PhotoSlider houses={houses} />


      {loading ? (<Spinner />) : (
        <div className='p-8 mt-10'>
          <div className="flex justify-between items-center">
            <div className="text">
              <h1 className="text-2xl font-bold">جدیدترین بومگردی‌ها و اقامتگاه‌ها</h1>
              <h4 className="mt-1">بومگردی‌ و اقامتگاه، اختصاصی با ما</h4>
            </div>
            {/* <div className="buttons ">
             <button className="btn mr-2 w-10 h-10 bg-white text-black p-2 border border-gray-300 rounded-xl"><ArrowRightIcon /></button>
             <button className="btn mr-2 w-10 h-10 bg-white text-black p-2 border border-gray-300 rounded-xl"><ArrowLeftIcon /></button>
           </div> */}
          </div>
          <div className="mt-8 mb-10 grid gap-x-6 gap-y-8 grid-cols-6 md:grid-cols-4 lg:grid-cols-4 min-w-4xl">
            {houses.slice(0, 20).map((_, index) => (
              <PhotoCard key={index} images={houses[index].images} house={houses[index]} />
            ))}
          </div>
        </div>
      )}

      {loading ? (<Spinner />) : (
        <div className='p-8 mt-10'>
          <div className="flex justify-between items-center">
            <div className="text">
              <h1 className="text-2xl font-bold"> اقامتگاه های اقتصادی</h1>
            </div>
            {/* <div className="buttons ">
              <button className="btn mr-2 w-10 h-10 bg-white text-black p-2 border border-gray-300 rounded-xl"><ArrowRightIcon /></button>
              <button className="btn mr-2 w-10 h-10 bg-white text-black p-2 border border-gray-300 rounded-xl"><ArrowLeftIcon /></button>
            </div> */}
          </div>
          <div className="mt-8 mb-10 grid gap-x-6 gap-y-8 grid-cols-6 md:grid-cols-4 lg:grid-cols-4 min-w-4xl">
            {houses.slice(20, 40).map((_, index) => (
              <PhotoCard key={index} images={houses[index].images} house={houses[index]} />
            ))}
          </div>
        </div>

      )}

      <div className='p-8'>
        <div className="flex justify-between items-center">
          <div className="text">
            <h1 className="text-2xl font-bold">انواع اقامتگاه ها</h1>
          </div>
          <div className="buttons ">
            <button
              onClick={prevSlideCities}
              className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"
              disabled={currentIndexCities === 0}
            >
              <ArrowRightIcon />
            </button>
            <button
              onClick={nextSlideCities}
              className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"
              disabled={currentIndexCities >= cityTypes.length - imagesPerPageCites}
            >
              <ArrowLeftIcon />
            </button>
          </div>
        </div>
        <div className="relative w-full my-8">
          <div className="flex overflow-hidden">
            {cityTypes.slice(currentIndexCities, currentIndexCities + imagesPerPageCites).map((image, index) => (
              <div key={index}>
                <div style={{ width: '200px', height: '300px' }} className="relative group rounded-lg overflow-hidden mx-2">
                  <img
                    src={image.src}
                    className="w-full h-full rounded-lg mx-2 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex m-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex text-white font-semibold">مشاهده همه <ArrowLeftIcon /></span>
                  </div>
                </div>
                <p className="mx-3 mt-2">{image.type}</p>
                <small className="mx-3 my-1 text-gray-500">
                  {image.description}
                </small>

              </div>

            ))}
          </div>
        </div>
      </div>


      <div className='p-8'>
        <div className="flex justify-between items-center">
          <div className="text">
            <h1 className="text-2xl font-bold">محبوب ترین شهرهای ایران</h1>
          </div>
          <div className="buttons ">
            <button
              onClick={prevSlideCities}
              className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"
              disabled={currentIndexCities === 0}
            >
              <ArrowRightIcon />
            </button>
            <button
              onClick={nextSlideCities}
              className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"
              disabled={currentIndexCities >= favoriteCities.length - imagesPerPageCites}
            >
              <ArrowLeftIcon />
            </button>
          </div>
        </div>
        <div className="relative w-full my-8">
          <div className="flex overflow-hidden">
            {favoriteCities.slice(currentIndexCities, currentIndexCities + imagesPerPageCites).map((image, index) => (
              // <img style={{ width: '200px', height: '200px' }} key={index} src={image} alt={`Slide ${index}`} className=" mx-4 rounded-lg transition-transform duration-700 ease-in-out transform hover:scale-110 hover:shadow-xl" />
              <div style={{ width: '200px', height: '200px' }} key={index} className="relative group rounded-lg overflow-hidden mx-2">
                <img
                  src={image.src}
                  className="w-full h-full rounded-lg mx-2 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">{image.text}</span>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}
