import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'

import { useState } from 'react'


// react icons
import { HiOutlineUserPlus } from "react-icons/hi2";
import { LiaBusSolid } from "react-icons/lia";
import { PiChefHat } from "react-icons/pi";
import { PiUsersFourLight } from "react-icons/pi";
import { PiCoinsLight } from "react-icons/pi";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { LiaUserSecretSolid } from "react-icons/lia";
import { PiHouse } from "react-icons/pi";

const statsData = [
    {title : "کل فروش", value : "۳۴۵۴۵", icon : <PiCoinsLight className='w-8 h-8'/>, description : "ماه جاری"},
    {title : "کاربران فعال", value : "۵.۶k", icon : <PiUsersFourLight className='w-8 h-8'/>, description : "↙ 300 (18%)"},
    {title : "کاربران جدید", value : "۳۴.۷k", icon : <HiOutlineUserPlus className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
    {title : "ادمین ها", value : "۴۵۰", icon : <LiaUserSecretSolid className='w-8 h-8'/>, description : "ادمین فعال"},
    {title : "راننده ها", value : "۵.۶k", icon : <LiaUserAstronautSolid className='w-8 h-8'/>, description : "↙ 2000 (18%)"},
    {title : "ملک دارها", value : "۵.۶k", icon : <PiHouse className='w-8 h-8'/>, description : "↗︎ 150 (18%)"},
    {title : "غذا دارها", value : "۵.۶k", icon : <PiChefHat className='w-8 h-8'/>, description : "↗︎ 10 (18%)"},
    {title : "اتوبوس ها", value : "۵.۶k", icon : <LiaBusSolid className='w-8 h-8'/>, description : "↙ 345 (18%)"},
]



function Dashboard(){

    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>



        {/** ---------------------- Different charts ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div>
            
        {/** ---------------------- Different stats content 2 ------------------------- */}
        
            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div>

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <DoughnutChart />
            </div>
        </>
    )
}

export default Dashboard