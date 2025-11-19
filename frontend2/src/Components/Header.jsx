import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
let isauth = false
  return (
    <div className="bg-white shadow-md py-4 px-10 flex justify-between items-center fixed w-full z-10">
        <div className='text-2xl font-bold text-blue-600'>
            <Link to={"/"}>MediMeet.</Link>
        </div>
        <div className='hidden md:flex space-x-6 text-gray-700 font-medium'>
            <Link to={'/'} className="hover:text-blue-600">Home</Link>
            <Link to={"/doctors"} className="hover:text-blue-600">Doctors</Link>
            <Link to={"/categories"} className="hover:text-blue-600">Categories</Link>
        </div>
        {isauth?
        <div>
            <Link className="hover:text-blue-600">Appointments</Link>
            <Link className="hover:text-blue-600">Prifle</Link>
        </div>:<div className='flex gap-3 items-center'>
            <div>
                
            </div>
            <Link to={"/login"} className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">Login </Link>
           <Link to={"/register"}  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Sing Up</Link>
        </div>
        }
    </div>
  )
}

export default Header