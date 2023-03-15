import React from 'react'

export function Chat() {
  return (
    <section className='w-full h-full flex flex-col pb-10'>
      <div className='flex items-center gap-2 pl-5 py-5 border-b-2 border-700-gray '>
        <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
        <h4 className='text-xl text-400-gray'>Andreos</h4>
      </div>
      <main className='w-full h-full pt-5 pr-5'>
        <div className='w-full h-full relative overflow-y-scroll'>
          <article className='inline-block w-full'>
            <div className='flex items-center gap-2 pl-5'>
              <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
              <h5 className='text-white'>Andreos</h5>
            </div>
            <div className='w-1/2 pl-8 pt-2'>
              <p className='bg-600-gray  p-4 rounded-r-xl rounded-bl-xl w-fit'>Hi, how ar</p>
            </div>
            <span>Today - 15:45</span>
          </article>

          <article className='inline-block w-full'>
            <div className='flex items-center gap-2 pl-5'>
              <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
              <h5 className='text-white'>Andreos</h5>
            </div>
            <div className='w-1/2 pl-8 pt-2'>
              <p className='bg-600-gray  p-4 rounded-r-xl rounded-bl-xl w-fit'>Hi, how ar</p>
            </div>
            <span>Today - 15:45</span>
          </article>

          <article className='flex flex-col w-full items-start mr-auto bg-red-900'>
              <div className='flex items-center gap-2 pl-5'>
                <div className='content-[""] w-8 h-8 bg-white rounded-full '></div>
                <h5 className='text-white'>Andreos</h5>
              </div>
              <div className='w-1/2 pl-8 pt-2'>
                <p className='bg-600-gray  p-4 rounded-r-xl rounded-bl-xl w-fit'>Hi, how ar</p>
              </div>
              <span>Today - 15:45</span>
          </article>
        </div>
      </main>
    </section>
  )
}
