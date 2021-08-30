import React from 'react'
import Image from 'next/image'
import { LocationMarkerIcon, StarIcon, UserIcon } from '@heroicons/react/solid'
import { ClockIcon, CalendarIcon } from '@heroicons/react/outline'

const Profile = () => {
  return (
    <div className='w-[440px] border py-7 px-6  mt-7  bg-white'>
      <div className='grid grid-cols-1 '>
        {/* Online badge */}
        <div className='flex items-center py-3  h-5 border ml-auto  justify-evenly rounded-full w-20   border-[#1DBF73]'>
          <p className='text-[#1DBF73] font-bold text-lg ml-1 h-[35px]'>.</p>
          <p className='text-[#1DBF73] text-lg'>Online</p>
        </div>
      </div>
      <div className='flex flex-col items-center mb-6'>
        <div className='relative h-40 w-40'>
          {/* Image */}
          <Image
            className='rounded-full'
            layout='fill'
            src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ee0b6ac99f0607584c4327295a215f8b-1614595315761/7cd99cf7-1d29-44b0-9c9f-87bc5a76eccc.jpg'
          />
        </div>

        {/* Name */}
        <h1 className=' text-2xl font-bold'>seotrot</h1>
        {/* short text */}
        <p className=' text-gray-500 font-medium'>Helping You Succeed Online</p>
        {/* Reviews */}
        <div className='flex items-center gap-x-2'>
          <div className='flex items-center'>
            <StarIcon className='h-5 text-yellow-400' />
            <StarIcon className='h-5 text-yellow-400' />
            <StarIcon className='h-5 text-yellow-400' />
            <StarIcon className='h-5 text-yellow-400' />
            <StarIcon className='h-5 text-yellow-400' />
          </div>
          <div className='flex gap-x-1'>
            <p>5.0</p>
            <p className='text-gray-500'>(370 reviews)</p>
          </div>
        </div>
        {/* Preview public */}
        <button className=' border mt-5  border-gray-900 py-2 px-28 rounded-lg font-semibold active:bg-gray-400 hover:border-none  text-gray-700 hover:text-white hover:bg-gray-500'>
          Preview Public Mode
        </button>
      </div>

      <div className='grid gap-y-3 mt-5'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2'>
            <LocationMarkerIcon className='h-5 text-gray-500' />
            <p>From</p>
          </div>

          <p className='font-semibold text-gray-700'>Pakistan</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2'>
            <UserIcon className='h-5 text-gray-500' />
            <p>Member since</p>
          </div>

          <p className='font-semibold text-gray-700'>Dec 2016</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2'>
            <ClockIcon className='h-5 text-gray-500' />
            <p>Avg. Response time</p>
          </div>

          <p className='font-semibold text-gray-700'>1 hour</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2'>
            <Image src='/telegram.svg' width='20' height='20' />
            <p>Last Delivery</p>
          </div>

          <p className='font-semibold text-gray-700'>1 Month</p>
        </div>
      </div>
      <div className='border my-5'></div>
      {/* Avaiable */}
      <div className='grid grid-cols-2'>
        <div className='flex items-center gap-x-2'>
          <CalendarIcon className='h-5 text-gray-500' />
          <p>Availale</p>
        </div>

        <button className=' border border-gray-900 py-2 rounded-md font-semibold active:bg-gray-400  text-gray-700 hover:text-white hover:bg-gray-500 '>
          Set Availability
        </button>
      </div>
    </div>
  )
}

export default Profile
