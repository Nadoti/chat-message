import React from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { Input } from '../components';

const inputTypes = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'E-mail'
  },
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password'
  },
]

export default function Register() {
  const email = 'dodo_nadoti@hotmail.com'
  const password = 'olaola123'

  function createNewUser() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('user', user)
      })
      .catch((error) => {
        //const errorCode = error.code
        const errorMessage = error.message
        console.log('errorMessage', errorMessage)
      })
  }



  return (
    <main className='bg-[#18171A] w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-5 shadow-2xl w-[30rem] p-16 rounded-xl'>
        <h1 className='text-white text-3xl text-center mb-6'>Register a new Account</h1>
        {inputTypes?.map(value => (
          <Input
            name={value.name}
            type={value.type}
            placeholder={value.placeholder}
          />
        ))}

        <button className='bg-[#35333D] py-2 text-slate-100 rounded-xl transition hover:brightness-90' onClick={createNewUser}>Sign Up</button>
        <span className='text-gray-500'>Already have an account ? <Link to='/' className='text-slate-400 hover:underline'>Click here</Link></span>
      </div>
    </main>
  )
}
