import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {

  const auth = getAuth();


  function loginUser() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.accessToken)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }


  return (
    <main className='bg-slate-700 w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-5 shadow-2xl w-[30rem] p-16 rounded-xl'>
        <h1 className='text-white text-4xl'>Chat Messenger</h1>
        <Input
          name='email'
          type='text'
          placeholder='E-mail'
        />
        <Input
          name='password'
          type='password'
          placeholder='Password'
        />
        <button
          onClick={loginUser}
          className='bg-slate-500 py-2 text-slate-100 rounded-xl transition hover:brightness-90'
        >
          Sign In
        </button>
        <span className='text-gray-500'>Don't have an account ? <Link to='/register' className='text-slate-400 hover:underline'>Click here</Link></span>
      </div>
    </main>
  )
}
