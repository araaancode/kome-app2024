import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../features/common/headerSlice'
import DriverSettings from '../features/settings/driverInfo/drive_settings'

function DriverInfo(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "ثبت اطلاعات راننده"}))
      }, [])
    return(
        <DriverSettings />
    )
}

export default DriverInfo