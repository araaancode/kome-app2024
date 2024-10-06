import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingWidget from "../components/BookingWidget";
import HouseGallery from "../components/HouseGallery";
import AddressLink from "../components/AddressLink";
import Header from "../components/Header"
import MapPage from "../components/MapPage"
import Footer from "../components/Footer"

import {
  RiTentLine,
  RiUser3Fill,
  RiSearchLine,
  RiWifiLine,
  RiParkingBoxLine,
  RiTvLine,
  RiLoginBoxLine
} from "@remixicon/react";

import { PiDog, PiTelevision, PiSolarRoof, PiBathtub, PiSwimmingPool, PiWashingMachine, PiForkKnifeDuotone, PiOvenDuotone } from "react-icons/pi"
import { LuParkingCircle, LuRefrigerator } from "react-icons/lu";
import { HiOutlineRadio } from "react-icons/hi2";
import { GiVacuumCleaner, GiBarbecue } from "react-icons/gi";
import { LiaWarehouseSolid } from "react-icons/lia"
import { BiSpeaker } from "react-icons/bi";
import { MdOutlineKebabDining, MdOutlineCoffeeMaker, MdOutlineMicrowave } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";

import HeaderLog from "../components/HeaderLog";

export default function HousePage() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  const [name, setName] = useState('')
  const [user, setUser] = useState('')


  const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/users/houses/${id}`).then(response => {
      setHouse(response.data.house);
    });




  }, [id]);

  if (!house) return '';


  return (
    <>
      <HeaderLog />

      <div dir="ltr" className="pt-4">
        <HouseGallery house={house} />

        <div className="flex px-8 mx-auto">
          <div className="w-2/5 p-4 mt-4 mb-4">
            <BookingWidget house={house} id={id} />
          </div>
          <div dir="rtl" className="w-3/5 p-4 mt-4 mb-8 text-justify">
            <div className="my-4 text-justify">
              <h2 className="font-semibold text-2xl mb-4 text-justify">درباره اقامتگاه </h2>
              <h2 className="font-semibold text-xl mb-4 text-justify">{house.name} </h2>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </div>
        </div>

        {/* end of booking */}

        {/* house options 1 */}
        <div dir="rtl" className="px-8 py-8 border-t">
          <div className="mb-4">
            <h2 className="font-semibold text-xl">امکانات</h2>
            <h3 style={{ fontSize: '18px' }} className="font-semibold mt-4">امکانات رفاهی</h3>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 mt-6">

            <div className="mt-4 mb-6">
              <PiTelevision className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">تلویزیون</span>
            </div>

            <div className="mt-2 mb-6">
              <LuParkingCircle className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">پارکینگ رایگان</span>
            </div>


            <div className="mt-2 mb-6">
              <HiOutlineRadio className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">رادیو</span>
            </div>

            <div className="mt-2 mb-6">
              <GiVacuumCleaner className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">جاروبرقی</span>
            </div>

            <div className="mt-2 mb-6">
              <PiSolarRoof className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">بالکن</span>
            </div>

            <div className="mt-2 mb-6">
              <LiaWarehouseSolid className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">آلاچیق</span>
            </div>

            <div className="mt-2 mb-6">
              <GiBarbecue className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">باربیکیو</span>
            </div>

            <div className="mt-2 mb-6">
              <BiSpeaker className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">سیستم صوتی</span>
            </div>

            <div className="mt-2 mb-6">
              <MdOutlineKebabDining className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">منقل</span>
            </div>

          </div>

        </div>

        {/* house options 2 */}
        <div dir="rtl" className="px-8 pt-6 pb-0">
          <div className="mb-4">
            <h3 style={{ fontSize: '18px' }} className="font-semibold mt-4">امکانات تفریحی</h3>
          </div>
          <div className="grid grid-cols-3 grid-rows-2">

            <div className="mt-4 mb-6">
              <PiBathtub className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">جکوزی</span>
            </div>

            <div className="mt-2 mb-6">
              <PiSwimmingPool className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">استخر سرپوشیده آبگرم</span>
            </div>


            <div className="mt-2 mb-6">
              <IoIosFootball className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">فوتبال دستی</span>
            </div>
          </div>

        </div>


        {/* house options 3 */}
        <div dir="rtl" className="px-8 py-6">
          <div className="mb-4">
            <h3 style={{ fontSize: '18px' }} className="font-semibold mt-4">امکانات آشپزخانه</h3>
          </div>
          <div className="grid grid-cols-3 grid-rows-2">

            <div className="mt-4 mb-6">
              <PiWashingMachine className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">ماشین لباسشویی</span>
            </div>

            <div className="mt-2 mb-6">
              <MdOutlineCoffeeMaker className="w-7 h-7 text-gray-700" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-700">چای ساز</span>
            </div>

            <div className="mt-2 mb-6">
              <MdOutlineMicrowave className="w-7 h-7 text-gray-600" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-600">مایکروویو</span>
            </div>

            <div className="mt-2 mb-6">
              <LuRefrigerator className="w-7 h-7 text-gray-600" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-600">یخچال</span>
            </div>


            <div className="mt-2 mb-6">
              <PiForkKnifeDuotone className="w-7 h-7 text-gray-600" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-600">لوازم آشپزی</span>
            </div>


            <div className="mt-2 mb-6">
              <PiOvenDuotone className="w-7 h-7 text-gray-600" />
              <span style={{ fontSize: '15px' }} className="font-semibold text-gray-600">اجاق گاز</span>
            </div>

          </div>
        </div>



        {/* bath */}
        <div dir="rtl" className="px-8 border-t py-6">
          <div className="mb-4">
            <h2 className="font-semibold text-xl">حمام و سرویس بهداشتی</h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 mt-6">
            <div className="mt-2 mb-4">
              <span className="font-bold"> حمام شخصی (1)</span>
            </div>

            <div className="mt-2 mb-4">
              <span className="font-bold"> حمام در سرویس (1)</span>
            </div>

            <div className="mt-2 mb-4">
              <span className="font-bold"> سرویس بهداشتی فرنگی (3)</span>
            </div>

            <div className="mt-2 mb-4">
              <span className="font-bold"> سرویس بهداشتی ایرانی (1)</span>
            </div>


          </div>

        </div>

        {/* rules 1 */}
        <div dir="rtl" className="px-8 border-t py-6">
          <div className="mb-4">
            <h2 className="font-semibold text-xl"> قوانین صاحبخانه</h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 mt-4">
            <div className="mt-2 mb-4">
              <span className="font-bold">ساعت ورود : 15:00</span>
            </div>

            <div className="mt-2 mb-4">
              <span className="font-bold">حداقل مدت اقامت مهمان : 1 شب</span>
            </div>


            <div className="mt-2 mb-4">
              <span className="font-bold">ورود حیوانات خانگی مجاز است</span>
            </div>


            <div className="mt-2 mb-4">
              <span className="font-bold">ساعت خروج : 12:00</span>
            </div>

            <div className="mt-2 mb-4">
              <span className="font-bold">حداکثر مدت اقامت مهمان : 30 شب</span>
            </div>
          </div>

        </div>

        {/* rules 2 */}
        <div dir="rtl" className="px-8 py-6">
          <div className="mb-4">
            <h2 className="font-semibold text-xl"> قوانین کنسلی و لغو رزرو (متعادل)</h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="mt-2 mb-2">
              <p className="font-bold inline">قبل از 72 ساعت: </p>  <span className="inline">20 درصد </span>
              <br />
              <p className="font-bold inline">بعد از 72 ساعت: </p>  <span className="inline">کسر شب اول + 20 درصد شب های باقیمانده </span>
              <br />
              <p className="font-bold inline">حین اقامت: </p>  <span className="inline"> کسر مبالغ شب های سپری شده + کسر شب بعدی + 20 درصد شب های باقیمانده </span>
              <br />
              <p className="font-bold inline"> ایام پیک: </p>  <span className="inline">  قبل از 7 روز: کسر 20 درصد از مبلغ رزرو - کمتر از 7 روز: کسر کل مبلغ رزرو </span>
              <br />
              <p className="font-bold inline">رزرو بلند مدت (بیش از 14 روز): </p>  <span className="inline"> کسر 5 شب اول + 20 درصد شبهای باقی مانده </span>
              <br />
              <p className="font-bold inline">ایام نوروز: </p>  <span className="inline"> قبل از 15 اسفند 20 درصد و بعد از 15 اسفند تمام مبلغ رزرو کسر می شود </span>

            </div>
          </div>
        </div>

        {/* map */}
        {/* <div className="px-8 border-t">
          <MapPage />
        </div> */}

        <div>
        </div>
      </div >
      <Footer />
    </>
  );
}
