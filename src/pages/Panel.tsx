import React from 'react'
import { PanelAside } from '../components'

export default function Panel() {

  const mensagens = [
    {
      id: 1,
      name: 'Douglas',
      menssage: 'Olá Pessoas, tudo bem com vcs ?',
      img: 'd'
    }
  ]

  return (
    <main className='bg-800-gray w-full h-screen grid grid-cols-[100px_minmax(900px,_1fr)] items-start'>
      <PanelAside />

      <section className='w-full h-full flex flex-col'>
        <div className='flex items-center gap-20 pt-10 pl-10 border-b-2 border-700-gray pb-12'>
          <h2 className='text-5xl text-500-gray'>Chat</h2>
          <div className='flex items-center gap-6 '>
            <button className='bg-500-blue w-8 h-8 text-xl font-bold text-white shadow-[0px_0px_0px_2px_#1664E6] border-[2px] border-800-gray flex items-center justify-center rounded-[3px]'>
              D
            </button>
            <button className='bg-500-blue w-8 h-8 text-xl  font-bold text-white hover:shadow-[0px_0px_0px_2px_#1664E6] border-[2px] border-800-gray flex items-center justify-center rounded-[3px] transition opacity-60 hover:opacity-100'>
              D
            </button>
          </div>
        </div>

        <div className='h-full grid grid-cols-[400px_minmax(900px,_1fr)]'>
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

        </div>
      </section>
    </main>
  )
}
