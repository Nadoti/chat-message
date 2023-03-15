import React from 'react'

export function SendMessages() {
  return (
    <div className='w-full pb-10 px-5'>
      <input type="text" className='w-full bg-transparent outline-none text-white border border-500-gray py-4 rounded-[40px] pl-6 focus:border-500-blue placeholder:text-xs' placeholder='White your Message...' />
    </div>
  )
}
