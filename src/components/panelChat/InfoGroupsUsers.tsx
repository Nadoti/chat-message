import React from 'react'

export function InfoGroupsUsers() {
  return (
    <div className='bg-900-gray w-full'>
      <div className=' w-full pl-6 pt-8 pr-8'>
        <button className='text-white text-2xl bg-700-gray text-left pl-4 py-3 rounded-lg w-full'>Global</button>
      </div>
      <div className='flex flex-col pl-8 mt-12 gap-44'>
        <div>
          <button className='text-600-gray mb-4 text-xl font-bold'>Groups</button>
          <div>
            <span className='text-400-gray  text-lg'># School</span>
          </div>
        </div>
        <div>
          <button className='text-600-gray mb-4 text-xl font-bold'>Contacts</button>
          <div>
            <span className='text-400-gray  text-lg'># João</span>
          </div>
        </div>
      </div>
    </div>
  )
}
