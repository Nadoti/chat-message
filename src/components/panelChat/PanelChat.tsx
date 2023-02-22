import React from 'react'
import { ChatMessages } from './ChatMessages'
import { HeaderPanel } from './HeaderPanel'
import { InfoGroupsUsers } from './InfoGroupsUsers'

export function PanelChat() {

  return (
    <section className='w-full h-full flex flex-col'>
      <HeaderPanel />
      <div className='h-full grid grid-cols-[400px_minmax(900px,_1fr)]'>
        <InfoGroupsUsers />
        <ChatMessages />
      </div>
    </section>
  )
}
