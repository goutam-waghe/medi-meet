
import React from 'react'

export const HomeUserReview = ({username , userType , text}) => {
  let firstLetter = username.split(" ")[0][0]
  return <div className='flex flex-col gap-3 bg-gray-500/30 px-5 py-5 text-white rounded'>
        <div className='flex gap-4'>
            <div className='flex w-10 h-10 justify-center items-center bg-[#14211E] rounded-full text-[]'  >{firstLetter}</div>
            <div className=''>
                <h3>{username}</h3>
                <p className='text-sm'>{userType}</p>
            </div>
            
        </div>
        
        <p>{text}</p>
    </div>
}

