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


// load icons
import DeleteIcon from '@iconscout/react-unicons/icons/uil-trash-alt'
import EditIcon from '@iconscout/react-unicons/icons/uil-edit-alt'

import UpdateAdmin from "../features/admins/UpdateAdmin"


const TopSideButtons = () => {

    const dispatch = useDispatch()

    const createNewUser = () => {
        // dispatch(showNotification({ message: "Add New Member clicked", status: 1 }))
        dispatch(openModal({ title: "ایجاد اقامتگاه جدید", bodyType: MODAL_BODY_TYPES.ADD_NEW_ADMIN }))
    }



    // return (
    //     <div className="inline-block float-right">
    //         <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => createNewUser()}>ایجاد کاربر جدید</button>
    //     </div>
    // )
}


const TEAM_MEMBERS = [
    { name: "اقامتگاه یک", avatar: "https://cdn-icons-png.flaticon.com/128/2082/2082563.png", city: "تهران", owner: "مالک یک", price: 1000, lastActive: "5 hr ago" },
    { name: "اقامتگاه دو", avatar: "https://cdn-icons-png.flaticon.com/128/1020/1020535.png", city: "ماسوله", owner: "مالک دو", price: 2000, lastActive: "15 min ago" },
    { name: "اقامتگاه سه", avatar: "https://cdn-icons-png.flaticon.com/128/3153/3153859.png", city: "یزد", owner: "مالک سه", price: 3000, lastActive: "20 hr ago" },
    { name: "اقامتگاه چهار", avatar: "https://cdn-icons-png.flaticon.com/128/1600/1600667.png", city: "خوزستان", owner: "مالک چهار", price: 4000, lastActive: "1 hr ago" },
    { name: "اقامتگاه پنج", avatar: "https://cdn-icons-png.flaticon.com/128/3313/3313260.png", city: "یزد", owner: "مالک پنج", price: 5000, lastActive: "40 min ago" },
    { name: "اقامتگاه شش", avatar: "https://cdn-icons-png.flaticon.com/128/2350/2350864.png", city: "آذربایجان", owner: "مالک شش", price: 60000, lastActive: "5 hr ago" },

]

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

const Rooms = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "اقامتگاه ها" }))
    }, [])

    const [members, setMembers] = useState(TEAM_MEMBERS)


    return (
        <>

            <TitleCard title="اقامتگاه ها" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>نام اقامتگاه</th>
                                <th>نام استان(نام شهر)</th>
                                <th>نام مالک</th>
                                <th>قیمت</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-circle w-12 h-12">
                                                            <img className="w-6 h-6" src={l.avatar} alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold mr-3">{l.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.city}</td>
                                            <td>{l.owner}</td>
                                            <td>{l.price}</td>
                                            <td><button onClick={() => deleteUser()}><DeleteIcon /></button></td>
                                            <td><button onClick={() => updateUser()}><EditIcon /></button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default Rooms