import React from 'react'
import { Chat } from './Chat'
import { SendMessages } from './SendMessages'

export function ChatScreen() {
  return (
    <div className='w-full h-full flex flex-col justify-between border-l-2 border-700-gray'>
      <Chat />
      <SendMessages />
    </div>
  )
}
