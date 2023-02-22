import React from 'react'

export function HeaderPanel() {
  return (
    <header className='flex items-center gap-20 pt-10 pl-10 border-b-2 border-700-gray pb-12'>
      <h2 className='text-5xl text-500-gray'>Chat</h2>
      <div className='flex items-center gap-6 '>
        <button className='bg-500-blue w-8 h-8 text-xl font-bold text-white shadow-[0px_0px_0px_2px_#1664E6] border-[2px] border-800-gray flex items-center justify-center rounded-[3px]'>
          D
        </button>
        <button className='bg-500-blue w-8 h-8 text-xl  font-bold text-white hover:shadow-[0px_0px_0px_2px_#1664E6] border-[2px] border-800-gray flex items-center justify-center rounded-[3px] transition opacity-60 hover:opacity-100'>
          D
        </button>
      </div>
    </header>
  )
}
