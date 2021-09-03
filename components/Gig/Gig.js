import { DotsHorizontalIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const Gig = ({ image, title, price }) => {
  return (
    <div className='bg-white border first:shadow-xl'>
      <div className='relative h-40 '>
        <Image src={image} layout='fill' objectFit='cover' />
      </div>
      <div className='px-3 py-4'>
        <p className='font-semibold text-gray-600  mb-5'>{title}</p>
      </div>
      <div className='flex items-center justify-between px-2'>
        <DotsHorizontalIcon className='h-7 text-gray-400' />
        <p className='text-green-400 text-xs font-semibold'>
          STARTING AT <span className='font-bold text-lg pl-1'>${price}</span>
        </p>
      </div>
    </div>
  )
}

export default Gig
