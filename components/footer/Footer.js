import {
  CurrencyDollarIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-5  w-[1500px] mx-auto '>
        <div className='footerItemGrid  '>
          <p className='text-lg font-bold pb-2'>Categories</p>
          <p className=' footerText'>Graphic & Design</p>
          <p className=' footerText'>Digital Marketing</p>
          <p className=' footerText'>Writing & Translation</p>
          <p className=' footerText'>Video & Animation</p>
          <p className=' footerText'>Music & Audio</p>
          <p className=' footerText'>Programming & Tech</p>
          <p className=' footerText'>Data</p>
          <p className=' footerText'>Business</p>
        </div>

        {/*  */}
        <div className='footerItemGrid  '>
          <p className='text-lg font-bold pb-2'>About</p>
          <p className=' footerText'>Careers</p>
          <p className=' footerText'>Press & News</p>
          <p className=' footerText'>Privacy Policy</p>
          <p className=' footerText'>Terms of Services</p>
          <p className=' footerText'>Intellectual Property Claims</p>
          <p className=' footerText'>Investor Relations</p>
        </div>
        {/*  */}
        <div className='footerItemGrid  '>
          <p className='text-lg font-bold pb-2'>Support</p>
          <p className=' footerText'>Help & Support</p>
          <p className=' footerText'>Trust & Safety</p>
        </div>
        {/*  */}
        <div className='footerItemGrid  '>
          <p className='text-lg font-bold pb-2'>Community</p>
          <p className=' footerText'>Events</p>
          <p className=' footerText'>Blog</p>
          <p className=' footerText'>Forum</p>
          <p className=' footerText'>Community Standards</p>
          <p className=' footerText'>Graphic & Design</p>
          <p className=' footerText'>Graphic & Design</p>
        </div>
        {/*  */}
        <div className='footerItemGrid  '>
          <p className='text-lg font-bold pb-2'>More From Fiverr</p>
          <p className=' footerText'>Fiverr Pro</p>
          <p className=' footerText'>Fiverr Logo Maker</p>
          <p className=' footerText'>Fiverr Guides</p>
          <p className=' footerText'>Get Inspired</p>
          <div>
            <p className=' footerText'>Clear Voice</p>
            <p className='text-gray-400'>Contents Marketing</p>
          </div>
          <div>
            <p className=' footerText'>Learn</p>
            <p className='text-gray-400'>Online Courses</p>
          </div>
        </div>
      </div>
      <div className=' border-t w-[1500px] mx-auto my-5'></div>
      {/* FooterBottom */}
      <div className='flex justify-between items-center w-[1500px] mx-auto'>
        <div className='flex items-center space-x-7'>
          <h1 className='text-3xl font-extrabold text-gray-500'>
            Fiverr <span className=' text-gray-400 font-semibold'>clone.</span>
          </h1>
          <p className='text-gray-400 mt-2'>
            &copy; Fiverr Clone Seotrot. 2021
          </p>
        </div>
        <div className='flex items-center space-x-8'>
          <div className='flex items-center gap-x-5'>
            {/* Social icons */}
            <Image src='/twitter.svg' width='25' height='25' />
            <Image src='/fb-social.svg' width='25' height='25' />
            <Image src='/linkedin.svg' width='25' height='25' />

            <Image src='/pinterest.svg' width='25' height='25' />
          </div>
          {/* Language */}
          <div className='flex items-center space-x-1'>
            <GlobeAltIcon className='text-gray-400 h-5' />
            <p className='font-semibold text-gray-500'>English</p>
          </div>
          <div className='flex items-center space-x-1'>
            <CurrencyDollarIcon className='text-gray-400 h-5' />
            <p className='font-semibold text-gray-500'>USD</p>
          </div>
          <UserCircleIcon className='h-10 text-gray-400 hover:bg-gray-300 hover:rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Footer
