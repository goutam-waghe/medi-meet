import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VefifyOtp = () => {
const [code , setCode] = useState("")
const navigate = useNavigate("")
 

  function submitHandler(e)
  {
    e.preventDefault()
    navigate("/reset-password")
  }

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4"'>
      <div className='md w-100 '>
        <div className='text-center text-white bg-blue-600 p-4'>
          One Time Passoword
        </div>
        <form action=""  onSubmit={submitHandler} className='flex flex-col px-10 py-15 bg-white gap-6 '>
          <input className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          placeholder="Enter the OTP"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)} />
          <button type='submit'  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md cursor-pointer">Confim</button>
        </form>
      </div>

    </div>
  )
}

export default VefifyOtp
