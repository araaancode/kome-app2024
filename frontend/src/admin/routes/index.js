// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const Requests = lazy(() => import('../pages/Requests'))
const Financials = lazy(() => import('../pages/Financials'))
const Users = lazy(() => import('../pages/Users'))
const Drivers = lazy(() => import('../pages/Drivers'))
const Cooks = lazy(() => import('../pages/Cooks'))
const Rooms = lazy(() => import('../pages/Rooms'))
const Owners = lazy(() => import('../pages/Owners'))
const Admins = lazy(() => import('../pages/Admins'))
const Profile = lazy(() => import('../pages/Profile'))
const UsersTickets = lazy(() => import('../pages/UsersTickets'))
const SingleUserTicket = lazy(() => import('../pages/SingleUserTicket'))


const routes = [


  {
    path: '/all-admins', // the url
    component: Admins, // view rendered
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
    path: '/requests',
    component: Requests,
  },
  {
    path: '/users/support-tickets',
    component: UsersTickets,
  },
  {
    path: '/users/:userId/support-tickets/:stId',
    component: SingleUserTicket,
  },
  {
    path: '/drivers/tickets',
    component: UsersTickets,
  },
  {
    path: '/owners/tickets',
    component: UsersTickets,
  },
  {
    path: '/cooks/tickets',
    component: UsersTickets,
  },
  {
    path: '/financials',
    component: Financials,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/drivers',
    component: Drivers,
  },
  {
    path: '/cooks',
    component: Cooks,
  },
  {
    path: '/rooms',
    component: Rooms,
  },
  {
    path: '/owners',
    component: Owners,
  },
  {
    path: '/all-admins',
    component: Admins,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default routes
