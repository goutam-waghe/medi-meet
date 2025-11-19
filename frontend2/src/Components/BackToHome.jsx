import { RiArrowLeftFill } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <Link to={"/"} className="bg-blue-600 rounded-lg py-2 px-4 text-white hover:bg-blue-500 flex gap-1 justify-center items-center absolute top-5 left-5 md:top-10 md:left-10">
      <RiArrowLeftFill/>
      <span className=' hidden md:inline'>Back to Home</span>
      </Link>
  )
}

export default BackToHome