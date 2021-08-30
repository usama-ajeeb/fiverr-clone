import React from 'react'
import Image from 'next/image'

const Learn = () => {
  return (
    <div className='grid grid-cols-1 gap-y-6 bg-white w-[440px] border py-7 px-4  mt-7 '>
      <div className='relative h-10 w-40 '>
        <Image
          src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg'
          objectFit='contain'
          layout='fill'
        />
      </div>
      <div className='flex justify-between items-center'>
        <div className='relative h-14 w-20'>
          <Image src='/badge.svg' layout='fill' objectFit='contain' />
        </div>
        <p className='truncate font-bold text-lg px-2 text-gray-600'>
          Online Freelancing Essentials: be a successful Fiver seller
          <p className='text-sm text-gray-400'>Sep 2019</p>
        </p>
      </div>
      <div className='border '></div>
      <button className=' border  bg-green-400  py-2 px-28 rounded-lg font-semibold active:bg-gray-400  text-white hover:text-white hover:bg-green-500'>
        Enroll Now
      </button>
    </div>
  )
}

export default Learn
