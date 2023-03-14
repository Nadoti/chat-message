import React from 'react'

export function SendMessages() {
  return (
    <div className='flex flex-col'>
      <div className='bg-900-gray pt-10 pb-10'>
        <span className='text-400-gray pl-10 text-4xl'># School</span>
      </div>

      <div className='w-full h-full flex flex-col justify-between'>
        <div className='h-full'>

        </div>

        <div className='pb-10 px-10'>
          <input type="text" className='w-full bg-transparent outline-none text-white border border-500-gray py-4 rounded-[40px] pl-6 focus:border-500-blue' placeholder='White your Message...' />
        </div>
      </div>

    </div>
  )
}
