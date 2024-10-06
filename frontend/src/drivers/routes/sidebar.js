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
import DriverIcon from '@iconscout/react-unicons/icons/uil-bus-school'
import CircleIcon from '@iconscout/react-unicons/icons/uil-circle-layer'
import { BiSupport } from "react-icons/bi";

const iconClasses = `h-8 w-8 text-gray-800`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/drivers/bookings',
    icon: <CalendarIcon size="140" className={iconClasses} />, 
    name: 'لیست رزروها',
  },
  {
    // path: '/drivers/calendar', // url
    path: '/drivers/driver-info', // url
    icon: <DriverIcon className={iconClasses}/>, // icon component
    name: 'ثبت اطلاعات راننده', // name that appear in Sidebar
  },
  {
    path: '/drivers/buses',
    icon: <BusIcon size="140" className={iconClasses} />, 
    name: 'تایید یا عدم اتوبوس',
  },
  {
    path: '/drivers/comments', // url
    // path: '/drivers/leads', // url
    icon: <ChatIcon size="140" className={iconClasses} />, // icon component
    name: ' نظرات کاربران ', // name that appear in Sidebar
  },
  {
    path: '/drivers/rates', // url
    // path: '/drivers/transactions', // url
    icon: <StarIcon className={iconClasses}/>, // icon component
    name: 'امتیاز',
  },
  // {
  //   path: '/drivers/charts', // url
  //   icon: <TicketIcon className={iconClasses}/>, // icon component
  //   name: 'تیکت پشتیبانی کاربران، ملک داران، اتوبوس دارها، غذادارها', // name that appear in Sidebar
  // },
  {
    path: '/drivers/financials', // url
    // path: '/drivers/integration', // url
    icon: <MoneyIcon className={iconClasses}/>, // icon component
    name: 'قسمت مالی', // name that appear in Sidebar
  },

  {
    path: '/drivers/advertisments', // url
    icon: <NewsPaperIcon className={iconClasses}/>, // icon component
    name: ' آگهی ها', // name that appear in Sidebar
  },

  // {
  //   path: '/drivers/price', // url
  //   // path: '/drivers/calendar', // url
  //   icon: <CoinsIcon className={iconClasses}/>, // icon component
  //   name: 'قیمت', // name that appear in Sidebar
  // },

  {
    // path: '/drivers/calendar', // url
    path: '/drivers/support', // url
    icon: <BiSupport className={iconClasses}/>, // icon component
    name: 'پشتیبانی', // name that appear in Sidebar
  },

  {
    // path: '/drivers/calendar', // url
    path: '/drivers/bank', // url
    icon: <BankIcon className={iconClasses}/>, // icon component
    name: 'حساب بانکی', // name that appear in Sidebar
  },
  

]

export default routes


