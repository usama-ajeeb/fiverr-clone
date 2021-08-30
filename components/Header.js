import React from 'react'
import Image from 'next/image'
import { MenuIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className='flex items-center justify-around shadow-md py-7 bg-white'>
      {/* Left */}
      <div className='flex items-center'>
        <MenuIcon className='xl:hidden h-8 text-gray-700' />
        <div className='relative h-7 w-40 '>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/400px-Fiverr_Logo_09.2020.svg.png'
            objectFit='contain'
            layout='fill'
          />
        </div>
        <div className=' xl:flex hidden items-center space-x-5'>
          <p className='menuItem'>Dashboard</p>
          <p className='menuItem'>Messages</p>
          <p className='menuItem'>Orders</p>
          <p className='menuItem'>Gigs</p>
          <p className='menuItem'>Analytics</p>
          <p className='menuItem'>Earnings</p>
          <p className='menuItem'>Community</p>
          <p className='menuItem'>More</p>
        </div>
      </div>
      {/* Right */}
      <div className='flex items-center space-x-5 '>
        <h1 className='text-[#1DBE73] text-lg font-bold '>Switch to Buying</h1>
        <div className='relative h-10 w-10'>
          <Image
            className='rounded-full'
            layout='fill'
            objectFit='contain'
            src='https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ee0b6ac99f0607584c4327295a215f8b-1614595315761/7cd99cf7-1d29-44b0-9c9f-87bc5a76eccc.jpg'
          />
          <div className='bg-[#1DBE73] absolute h-3 w-3 rounded-full top-7 left-7 border-2'></div>
        </div>
      </div>
    </div>
  )
}

export default Header
