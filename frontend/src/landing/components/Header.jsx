import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ExtraLinks from "../components/ExtraLinks";
import Navbar from "../components/Navbar";

import { RiTentLine, RiUser3Fill, RiSearchLine, RiMenuLine } from "@remixicon/react";


export default function Header() {


  const userToken = localStorage.getItem("userToken")

  return (
    <div style={{
      backgroundImage: "url(" + "https://wallpapercave.com/wp/wp2065959.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '580px',
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '25px',
    }} className="mb-20">

      <header className="flex justify-between mb-10 px-10 py-6">
        <Link to={'/'} className="flex items-center gap-1">
          <RiTentLine className="w-12 h-12 text-white" />
        </Link>

        <Link to={userToken ? '/profile' : '/login'}>
          <div style={{ width: '120px', height: '60px' }} className="flex items-center p-2 space-x-2 w-2/8 justify-end hover:border hover:rounded-full hover:shadow-lg">
            <div className="w-10 h-10 mx-3 bg-white rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/128/17384/17384295.png"
                alt="Avatar"
                className="w-full h-full object-cover rounded-full text-white p-1"
              />
            </div>
            <RiMenuLine className="text-white w-6 h-6 font-bold" />
          </div>
        </Link>

      </header>

      <Navbar />

    </div>

  );
}