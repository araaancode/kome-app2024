// All components mapping with path for internal routes

import { lazy } from 'react'


// const Charts = lazy(() => import('../pages/protected/Charts'))
// const Leads = lazy(() => import('../pages/protected/Leads'))
// const Integration = lazy(() => import('../pages/protected/Integration'))
// const Calendar = lazy(() => import('../pages/protected/Calendar'))
// const Team = lazy(() => import('../pages/protected/Team'))
// const Transactions = lazy(() => import('../pages/protected/Transactions'))
// const Bills = lazy(() => import('../pages/protected/Bills'))
// const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
// const GettingStarted = lazy(() => import('../pages/GettingStarted'))
// const DocFeatures = lazy(() => import('../pages/DocFeatures'))
// const DocComponents = lazy(() => import('../pages/DocComponents'))

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))


// routes for drivers
const Bookings = lazy(() => import('../pages/Bookings'))
const Buses = lazy(() => import('../pages/Buses'))
const Comments = lazy(() => import('../pages/Comments'))
const Rates = lazy(() => import('../pages/Rates'))
const Financials = lazy(() => import('../pages/Financials'))
const Advertisments = lazy(() => import('../pages/Advertisments'))
const Prices = lazy(() => import('../pages/Prices'))
const Support = lazy(() => import('../pages/Support'))
const Bank = lazy(() => import('../pages/Bank'))
const Owners = lazy(() => import('../pages/Owners'))
const Profile = lazy(() => import('../pages/Profile'))
const DriverInfo = lazy(() => import('../pages/DriverInfo'))


const routes = [
  
 
  {
    path: '/bookings', // the url
    component: Bookings, // view rendered
  },
  {
    path: '/buses', // the url
    component: Buses, // view rendered
  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/comments',
    component: Comments,
  },
  {
    path: '/rates',
    component: Rates,
  },
  {
    path: '/financials',
    component: Financials,
  },
  {
    path: '/advertisments',
    component: Advertisments,
  },
  {
    path: '/price',
    component: Prices,
  },
  {
    path: '/support',
    component: Support,
  },
  {
    path: '/bank',
    component: Bank,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/driver-info',
    component: DriverInfo,
  },
  
]

export default routes
