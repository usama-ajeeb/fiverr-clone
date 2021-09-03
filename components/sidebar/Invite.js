import React, { useState } from 'react'
import Image from 'next/image'
import { Switch } from '@headlessui/react'

export const Invite = () => {
  const [enabled, setEnabled] = useState(true)
  return (
    // <div className='flex items-center justify-around border shadow-md mt-11 py-10 px-7'>
    <div className='grid grid-cols-2 bg-white justify-items-center   border py-7 gap-y-3 w-[440px]  '>
      <div className='flex items-center space-x-3'>
        <div className='relative h-5 w-5 '>
          <Image
            objectFit='contain'
            layout='fill'
            src='https://npm-assets.fiverrcdn.com/assets/@fiverr-private/seller_studio_card/get-invite.21e3863.svg'
          />
        </div>
        <p>Get Studio Invites</p>
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-[#1DBF73]' : 'bg-gray-200'
        } relative inline-flex items-center h-7 rounded-full w-12 ml-28`}
      >
        <span className='sr-only'>Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-5' : 'translate-x-1'
          } inline-block w-6 h-6 transform bg-white rounded-full`}
        />
      </Switch>

      <p className='text-sm text-gray-600 ml-[200px] w-[300px]'>
        Choose whether you want to get invites from Leads to join a Studio. If
        turned off, Studio Leads will not be able to find you.
      </p>
    </div>
  )
}
