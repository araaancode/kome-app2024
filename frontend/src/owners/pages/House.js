import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification, setPageTitle } from "../features/common/headerSlice"
import TitleCard from "../components/Cards/TitleCard"
import moment from "moment"

const INITIAL_INTEGRATION_LIST = [
  { name: "ملک یک ", icon: "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", isActive: true, description: "از اینجا می توانید ملک را تایید یا رد کنید" },
  { name: "ملک دو ", icon: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", isActive: true, description: "از اینجا می توانید ملک را تایید یا رد کنید" },
  { name: "ملک سه ", icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjgyNDc0NzIxNDE2NTI5NTIy/original/c329a04a-51b7-477d-9fc7-7aa4a3a998e7.jpeg?im_w=720", isActive: true, description: "از اینجا می توانید ملک را تایید یا رد کنید" },
  {
    name: "ملک چهار ", icon: "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720",
    isActive: true, description: "از اینجا می توانید ملک را تایید یا رد کنید"
  },
  { name: "ملک پنج ", icon: "https://a0.muscache.com/im/pictures/miso/Hosting-908611595823138745/original/e2ea2ccc-df2a-4e49-b81d-a508508aae02.jpeg?im_w=720", isActive: true, description: "از اینجا می توانید ملک را تایید یا رد کنید" },

  { name: "ملک شش ", icon: "https://a0.muscache.com/im/pictures/miso/Hosting-609161492165382333/original/90d03745-e550-49c3-891e-ec5b6dc40a75.jpeg?im_w=720", isActive: true, description: "از اینجا می توانید ملک را تایید یا رد کنید" },
  
]

function Buses() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle({ title: "تایید یا عدم تایید ملک " }))
  }, [])


  const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST)


  const updateIntegrationStatus = (index) => {
    let integration = integrationList[index]
    setIntegrationList(integrationList.map((i, k) => {
      if (k === index) return { ...i, isActive: !i.isActive }
      return i
    }))
    dispatch(showNotification({ message: `${integration.name} ${integration.isActive ? "رد شد" : "تایید شد"}`, status: 1 }))
  }


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-200">
        {
          integrationList.map((i, k) => {
            return (
              <TitleCard key={k} title={i.name} topMargin={"mt-2"}>

                <p className="flex flex-col">
                  <img alt="icon" src={i.icon} className="w-full h-50 inline-block ml-4" />
                  <span className="mt-4">{i.description}</span>
                </p>
                <div className="mt-6 mb-0 text-right">
                  <input type="checkbox" className="toggle toggle-success toggle-lg" checked={i.isActive} onChange={() => updateIntegrationStatus(k)} />
                </div>
              </TitleCard>
            )

          })
        }
      </div>
    </>
  )
}

export default Buses