import React from 'react'
import { ChatScreen } from './PageChatComponents/ChatScreen'
import ContentUsersAdd from './PageChatComponents/ContentUsersAdd'

export default function ChatPanel() {
  return (
    <main className='w-full h-full flex'>
      <ContentUsersAdd />
      <ChatScreen />
    </main>
  )
}
