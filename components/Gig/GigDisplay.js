import React from 'react'
import { gigData } from '../../mockdata/gigs'
import Gig from './Gig'

const GigDisplay = () => {
  return (
    <div className=' relative w-[810px] max-h-[600px] '>
      <div className='flex items-center border   h-[70px] bg-white'>
        <h1 className='ml-5  font-bold '>ACTIVE GIGS</h1>
      </div>

      <div className='grid grid-cols-3 gap-x-4 mt-10'>
        {gigData.map(({ image, title, price }) => (
          <Gig key={title} image={image} title={title} price={price} />
        ))}
        <div className='bg-[#1DBF73] absolute py-2 px-2 -mt-6  rounded-t-[3px]'>
          <p className='text-white font-bold text-sm'>BEST SELLER</p>
        </div>
      </div>
    </div>
  )
}

export default GigDisplay
