import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../features/common/headerSlice'
import OwnersSettings from '../features/settings/OwnersInfo/index'

function OwnersInfo(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "ثبت اطلاعات ملک دار"}))
      }, [])
    return(
        <OwnersSettings />
    )
}

export default OwnersInfo