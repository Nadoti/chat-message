import React from 'react'
import Chat from './PageChatComponents/Chat'
import ContentUsersAdd from './PageChatComponents/ContentUsersAdd'

export function ChatPanel() {
  return (
    <main className='w-full h-full flex '>
      <ContentUsersAdd />
      <Chat />
    </main>
  )
}
