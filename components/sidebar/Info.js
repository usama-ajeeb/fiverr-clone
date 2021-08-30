import React from 'react'
import Image from 'next/image'

const Info = () => {
  return (
    <div className='grid grid-cols-1 gap-y-6 w-[440px] border py-7 px-4  mt-7  bg-white'>
      <div className='grid grid-cols-1 gap-y-3'>
        {/* Description */}
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>Description</p>
          <button className='text-[#00698c] font-semibold'>
            Edit Description
          </button>
        </div>
        <p className='text-gray-600 font-medium'>
          I’m a Full-stack software engineer, have 8+ years of coding
          experience. My expertise are in JavaScript, html5, css3, reactJS,
          NodeJs, firebase and mongodb
        </p>
      </div>
      <div className='border '></div>
      <div className='grid grid-cols-1 gap-y-6'>
        {/* Languages */}

        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>Languages</p>
          <button className='text-[#00698c] font-semibold'>Add new</button>
        </div>
        <p className=' text-gray-600 font-semibold'>
          English - <span className=' text-gray-400'>Conversational</span>
        </p>
        <p className=' text-gray-600 font-semibold'>
          German <span className='font-bold'>(Deutsch)</span> -{' '}
          <span className=' text-gray-400'>Conversational</span>
        </p>
        <p className=' text-gray-600 font-semibold'>
          Spanish <span className='font-bold'>(Español)</span> -{' '}
          <span className=' text-gray-400'>Conversational</span>
        </p>
      </div>
      <div className='border '></div>
      <div className='grid gap-y-3'>
        {/* linked accounts */}
        <p className='font-bold text-lg'>Linked Accounts</p>
        <div className='flex items-center gap-x-2'>
          <Image src='/fb.png' objectFit='contain' width='15' height='15' />
          <p>Facebook</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image src='/github.png' objectFit='contain' width='15' height='15' />
          <p>github</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image
            src='/twitter.png'
            objectFit='contain'
            width='15'
            height='15'
          />
          <p>twitter</p>
        </div>
      </div>
      <div className='border '></div>
      <div className='grid gap-y-2'>
        {/* Skills */}
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>Skills</p>
          <button className='text-[#00698c] font-semibold'>Add new</button>
        </div>
        <div className='grid grid-cols-4 gap-x-2 gap-y-2'>
          <div className='border flex items-center px-3 h-10 rounded-full gap-x-1'>
            <p>HTML5</p>

            <Image
              objectFit='contain'
              width='15'
              height='15'
              src='http://assetsv2.fiverrcdn.com/assets/v2_globals/icn-seller-tests-check-35bacbb4947840755912a32799989a16.svg'
            />
          </div>
          <div className='border flex items-center p-3 rounded-full gap-x-1'>
            <p>CSS3</p>

            <Image
              objectFit='contain'
              width='15'
              height='15'
              src='http://assetsv2.fiverrcdn.com/assets/v2_globals/icn-seller-tests-check-35bacbb4947840755912a32799989a16.svg'
            />
          </div>
          <div className='border flex items-center p-3 rounded-full gap-x-1'>
            <p>REACT</p>

            <Image
              objectFit='contain'
              width='15'
              height='15'
              src='http://assetsv2.fiverrcdn.com/assets/v2_globals/icn-seller-tests-check-35bacbb4947840755912a32799989a16.svg'
            />
          </div>
          <div className='border flex items-center p-3 rounded-full gap-x-1'>
            <p>JavaScript</p>

            <Image
              objectFit='contain'
              width='15'
              height='15'
              src='http://assetsv2.fiverrcdn.com/assets/v2_globals/icn-seller-tests-check-35bacbb4947840755912a32799989a16.svg'
            />
          </div>
          <div className='border flex items-center p-3 rounded-full '>
            <p>NextJs</p>
          </div>
        </div>
      </div>
      <div className='border '></div>
      <div className='grid gap-y-3'>
        {/* Education */}
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>Education</p>
          <button className='text-[#00698c] font-semibold'>Add new</button>
        </div>
        <div className='grid gap-y-1'>
          <p className=' text-gray-700 font-semibold'>
            B.Sc. - Software Engineering
          </p>
          <p className=' text-gray-400 font-semibold'>
            Isra University, Pakistan, Graduated 2015
          </p>
        </div>
      </div>
      <div className='border '></div>
      <div className='grid gap-y-3'>
        {/* Education */}
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>Certification</p>
          <button className='text-[#00698c] font-semibold'>Add new</button>
        </div>
        <div className='grid gap-y-1'>
          <p className=' text-gray-700 font-semibold'>Software Engineer</p>
          <p className=' text-gray-400 font-semibold'>Isra University 2015</p>
        </div>
      </div>
    </div>
  )
}

export default Info
