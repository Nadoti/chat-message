import React from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";
import { auth, db } from '../../../../../firebase/firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export function SendMessages() {
  const [message, setMessage] = React.useState('testanmdo')
  console.log(auth)

  async function sendMessage(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()
    if(message.trim() === '') alert('Enter valid message')

    const { uid, displayName, photoURL} = auth.currentUser
    await addDoc(collection(db, 'global'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid
    })
    setMessage('')
  }

  return (
    <form onSubmit={sendMessage} className='w-full pb-10 px-5'>
      <div className='w-full relative '>
        <input 
          type="text" 
          className='w-full bg-transparent outline-none text-white border border-500-gray py-4 relative overflow-hidden rounded-[40px] pl-6 focus:border-500-blue placeholder:text-xs' placeholder='White your Message...' />
        <button 
          type='submit'
          className='px-4 absolute bottom-0 top-0 right-0'
        >
          <RiSendPlane2Fill color='#1664E6' size={25} />
        </button>
      </div>
    </form>
  )
}