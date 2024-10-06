import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../components/Cards/TitleCard"
import { showNotification } from '../features/common/headerSlice'
import MomentJalali from "moment-jalaali"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { openModal } from "../features/common/modalSlice"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setPageTitle } from '../features/common/headerSlice'
import Subtitle from "../components/Typography/Subtitle"


// load icons
import DeleteIcon from '@iconscout/react-unicons/icons/uil-trash-alt'
import EditIcon from '@iconscout/react-unicons/icons/uil-edit-alt'


import UpdateAdmin from "../features/admins/UpdateAdmin"

import { CiCreditCard2 } from "react-icons/ci"

const TopSideButtons = () => {

  const dispatch = useDispatch()

  const createNewUser = () => {
    // dispatch(showNotification({ message: "Add New Member clicked", status: 1 }))
    dispatch(openModal({ title: "ایجاد اقامتگاه جدید", bodyType: MODAL_BODY_TYPES.ADD_NEW_ADMIN }))
  }
}

const TEAM_MEMBERS = [
  { name: "اقامتگاه یک", avatar: "https://cdn-icons-png.flaticon.com/128/2082/2082563.png", city: "تهران", owner: "مالک یک", price: 1000, lastActive: "5 hr ago" },
  { name: "اقامتگاه دو", avatar: "https://cdn-icons-png.flaticon.com/128/1020/1020535.png", city: "ماسوله", owner: "مالک دو", price: 2000, lastActive: "15 min ago" },
  { name: "اقامتگاه سه", avatar: "https://cdn-icons-png.flaticon.com/128/3153/3153859.png", city: "یزد", owner: "مالک سه", price: 3000, lastActive: "20 hr ago" },
  { name: "اقامتگاه چهار", avatar: "https://cdn-icons-png.flaticon.com/128/1600/1600667.png", city: "خوزستان", owner: "مالک چهار", price: 4000, lastActive: "1 hr ago" },
  { name: "اقامتگاه پنج", avatar: "https://cdn-icons-png.flaticon.com/128/3313/3313260.png", city: "یزد", owner: "مالک پنج", price: 5000, lastActive: "40 min ago" },
  { name: "اقامتگاه شش", avatar: "https://cdn-icons-png.flaticon.com/128/2350/2350864.png", city: "آذربایجان", owner: "مالک شش", price: 60000, lastActive: "5 hr ago" },

]

const Bank = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle({ title: "بانک" }))
  }, [])


  const [members, setMembers] = useState(TEAM_MEMBERS)
  const [sheba, setSheba] = useState("")
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("")

  const handleBankChange = (e) => {
    setSheba(e.target.value);
  };


  const addAccount = () => {
    dispatch(showNotification({ message: "به حساب بانکی متصل شد", status: 1 }))
  }


  const updateUser = () => {
    alert("update user")
  }

  const deleteUser = () => {
    Swal.fire({
      title: "آیا از حذف اقامتگاه اطمینان دارید؟",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "بله",
      denyButtonText: `خیر`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("اقامتگاه حذف شد!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("تغییرات ذخیره نشد", "", "info");
      }
    });
  }


  return (
    <>
      <div className={"card w-full p-6 bg-base-100 shadow-xl mt-6 h-screen"}>

        {/* Title for Card */}
        <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
          بانک

          {/* Top side button, show only if present */}
          {
            TopSideButtons && <div className="inline-block float-righ">{TopSideButtons}</div>
          }
        </Subtitle>

        <div className="divider mt-2"></div>

        {/** Card Body */}
        <div className='h-full w-full pb-6 bg-base-100'>
          <div className="flex flex-col mb-6">
            <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">شماره شبا</label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <CiCreditCard2 className="w-8 h-8 text-gray-400" />
              </div>
              <input style={{ borderRadius: '5px' }} type="text" value={sheba}
                onChange={handleBankChange} className="text-sm sm:text-base placeholder-gray-400 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-800" placeholder="شماره شبا" />
            </div>
            <span className='text-red-500 relative text-sm'>{errorPhoneMessage ? errorPhoneMessage : ""}</span>
          </div>
          <div className="mt-6"><button className="btn bg-blue-800 hover:bg-blue-900 text-white float-right" onClick={() => addAccount()}>اتصال به حساب بانکی</button></div>
        </div>
      </div>
    </>
  )
}

export default Bank