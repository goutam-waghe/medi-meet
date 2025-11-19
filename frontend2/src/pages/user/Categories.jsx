import React from 'react'
import Header from '../../Components/Header'
import {categories} from "../../constant.js"
import HomeCategory from '../../Components/HomeCategory'

const Categories = () => {
  return (
    <>
    <Header/>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-25 px-10 '>
        {categories.map((value , index) => <HomeCategory key={index}  name={value.name}
                 available={value.available}
                Icon={value.icon}/>)}
    </div>

    </>
    
  )
}

export default Categories