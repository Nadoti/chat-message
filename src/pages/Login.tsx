import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <main className='bg-slate-700 w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-5 shadow-2xl w-[30rem] p-16 rounded-xl'>
        <h1 className='text-white text-4xl'>Chat Messenger</h1>
        <input type="text" className='bg-transparent text-slate-100 outline-none py-2 px-4 rounded-xl border-2 border-slate-600 transition focus:border-slate-800' placeholder='E-mail' />
        <input type="text" className='bg-transparent text-slate-100 outline-none py-2 px-4 rounded-xl border-2 border-slate-600 transition  focus:border-slate-800' placeholder='Password' />
        <button className='bg-slate-500 py-2 text-slate-100 rounded-xl transition hover:brightness-90'>Sign In</button>
        <span className='text-gray-500'>Don't have an account ? <Link to='/register' className='text-slate-400 hover:underline'>Click here</Link></span>
      </div>
    </main>
  )
}
