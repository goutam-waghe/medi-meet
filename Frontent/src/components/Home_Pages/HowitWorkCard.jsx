import React from 'react'

const HowitWorkCard = ({Icon , heading , text}) => {
  return (
    <div className='flex flex-col gap-3 bg-gray-500/30 px-5 py-5 text-white rounded'>
        <div className='bg-green-900/20 self-start p-2 rounded border border-green-600'><Icon/></div>
        <div>{heading}</div>
        <p>{text}</p>
    </div>
  )
}

export default HowitWorkCard