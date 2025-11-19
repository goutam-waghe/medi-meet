import React, { useState } from 'react'
import { RiCloseLargeFill , RiToggleFill } from '@remixicon/react'

const DoctorLayout = () => {
  const [OpenSideBar , SetOpenSideBar] = useState(false)

  return (
    <div>

    {/* side bar */}
    <div  onClick={() => SetOpenSideBar(!OpenSideBar)} className='bg-blue-600 p-2 rounded-xl inline-block '>
     {OpenSideBar?<RiCloseLargeFill/>:<RiToggleFill/>}
    </div>

    {/* */}
    <div>

    </div>


    
    </div>
  )
}

export default DoctorLayout