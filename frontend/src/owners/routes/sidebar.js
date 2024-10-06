// *** icons ***
// heroicons
import DashboardIcon from '@heroicons/react/24/outline/Squares2X2Icon'

// iconsscout
import BusIcon from '@iconscout/react-unicons/icons/uil-bus'
import FileSearchIcon from '@iconscout/react-unicons/icons/uil-file-search-alt'
import TicketIcon from '@iconscout/react-unicons/icons/uil-ticket'
import MoneyIcon from '@iconscout/react-unicons/icons/uil-bill'
import EditIcon from '@iconscout/react-unicons/icons/uil-edit-alt'
import MoneyStackIcon from '@iconscout/react-unicons/icons/uil-money-bill-stack'
import MeIcon from '@iconscout/react-unicons/icons/uil-grin'
import AdvIcon from '@iconscout/react-unicons/icons/uil-coins'
import BuildingIcon from '@iconscout/react-unicons/icons/uil-building'
import UsersIcon from '@iconscout/react-unicons/icons/uil-users-alt'
import BankIcon from '@iconscout/react-unicons/icons/uil-university'
import DriversIcon from '@iconscout/react-unicons/icons/uil-bus-school'
import CooksIcon from '@iconscout/react-unicons/icons/uil-pizza-slice'
import RoomsIcon from '@iconscout/react-unicons/icons/uil-trees'
import HomeIcon from '@heroicons/react/24/outline/HomeModernIcon'
import AdminsIcon from '@iconscout/react-unicons/icons/uil-user-square'
import CoinsIcon from '@iconscout/react-unicons/icons/uil-coins'
import NewsPaperIcon from '@iconscout/react-unicons/icons/uil-newspaper'
import StarIcon from '@iconscout/react-unicons/icons/uil-star-half-alt'
import ChatIcon from '@iconscout/react-unicons/icons/uil-chat'
import CalendarIcon from '@iconscout/react-unicons/icons/uil-calender'
import CircleIcon from '@iconscout/react-unicons/icons/uil-circle-layer'
import HouseUserIcon from '@iconscout/react-unicons/icons/uil-house-user'
import CampIcon from '@iconscout/react-unicons/icons/uil-fire'
import { BiSupport } from "react-icons/bi";

import { RiTentLine } from "@remixicon/react";

const iconClasses = `h-8 w-8 text-gray-800`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/owners/owners-info',
    icon: <HouseUserIcon size="140" className={iconClasses} />, 
    name: 'ثبت اطلاعات ملک دار',
  },

  {
    path: '/owners/bookings',
    icon: <CalendarIcon size="140" className={iconClasses} />, 
    name: 'لیست رزروها',
  },

  {
    path: '/owners/financials', // url
    icon: <MoneyIcon className={iconClasses}/>, // icon component
    name: 'قسمت مالی', // name that appear in Sidebar
  },

  {
    path: '/owners/house', // url
    icon: <CampIcon className={iconClasses}/>, // icon component
    name: 'تایید یا عدم ملک', // name that appear in Sidebar
  },

  {
    path: '/owners/advertisments', // url
    icon: <NewsPaperIcon className={iconClasses}/>, // icon component
    name: ' آگهی ها', // name that appear in Sidebar
  },

  {
    path: '/owners/comments', // url
    icon: <ChatIcon size="140" className={iconClasses} />, // icon component
    name: ' نظرات کاربران ', // name that appear in Sidebar
  },

  {
    path: '/owners/rates', // url
    icon: <StarIcon className={iconClasses}/>, // icon component
    name: 'امتیاز',
  },

  {
    path: '/owners/support', // url
    icon: <BiSupport className={iconClasses}/>, // icon component
    name: 'پشتیبانی', // name that appear in Sidebar
  },

  {
    path: '/owners/bank', // url
    icon: <BankIcon className={iconClasses}/>, // icon component
    name: 'حساب بانکی', // name that appear in Sidebar
  },

]

export default routes


