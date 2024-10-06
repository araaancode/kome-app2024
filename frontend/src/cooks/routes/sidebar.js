// *** icons ***
// heroicons
import DashboardIcon from '@heroicons/react/24/outline/Squares2X2Icon'
import CakeIcon from '@heroicons/react/24/outline/CakeIcon'

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
import cooksIcon from '@iconscout/react-unicons/icons/uil-bus-school'
import CooksIcon from '@iconscout/react-unicons/icons/uil-pizza-slice'
import RoomsIcon from '@iconscout/react-unicons/icons/uil-trees'
import HomeIcon from '@heroicons/react/24/outline/HomeModernIcon'
import AdminsIcon from '@iconscout/react-unicons/icons/uil-user-square'
import CoinsIcon from '@iconscout/react-unicons/icons/uil-coins'
import NewsPaperIcon from '@iconscout/react-unicons/icons/uil-newspaper'
import StarIcon from '@iconscout/react-unicons/icons/uil-star-half-alt'
import ChatIcon from '@iconscout/react-unicons/icons/uil-chat'
import CalendarIcon from '@iconscout/react-unicons/icons/uil-calender'
import DriverIcon from '@iconscout/react-unicons/icons/uil-bus-school'
import CircleIcon from '@iconscout/react-unicons/icons/uil-circle-layer'
import FoodIcon from '@iconscout/react-unicons/icons/uil-pizza-slice'
import { BiListUl } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { PiChefHat,PiBowlFoodLight,PiCoins } from "react-icons/pi";
import { VscVerified } from "react-icons/vsc";


const iconClasses = `h-8 w-8 text-gray-800`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/cooks/orders',
    icon: <BiListUl size="140" className={iconClasses} />, 
    name: 'لیست سفارش ها',
  },
  {
    path: '/cooks/cook-info', // url
    icon: <PiChefHat className={iconClasses}/>, // icon component
    name: 'ثبت اطلاعات غذادار', // name that appear in Sidebar
  },

  {
    path: '/cooks/financials', // url
    icon: <MoneyIcon className={iconClasses}/>, // icon component
    name: 'قسمت مالی', // name that appear in Sidebar
  },
  {
    path: '/cooks/cooks',
    icon: <VscVerified size="140" className={iconClasses} />, 
    name: 'تایید یا عدم غذادار',
  },
   
  {
    path: '/cooks/comments', // url
    icon: <ChatIcon size="140" className={iconClasses} />, // icon component
    name: ' نظرات کاربران ', // name that appear in Sidebar
  },

  {
    path: '/cooks/advertisments', // url
    icon: <NewsPaperIcon className={iconClasses}/>, // icon component
    name: ' آگهی ها', // name that appear in Sidebar
  },

  
  {
    path: '/cooks/rates', // url
    icon: <StarIcon className={iconClasses}/>, // icon component
    name: 'امتیاز',
  },

  {
    path: '/cooks/support', // url
    icon: <BiSupport className={iconClasses}/>, // icon component
    name: 'پشتیبانی', // name that appear in Sidebar
  },

  {
    path: '/cooks/bank', // url
    icon: <BankIcon className={iconClasses}/>, // icon component
    name: 'حساب بانکی', // name that appear in Sidebar
  },
  

]

export default routes


