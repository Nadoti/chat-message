import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PanelAside } from '../components'
import { ChatPanel } from '../components/pages/panel/chat/ChatPanel'
import { HomePanel } from '../components/pages/panel/home/HomePanel'

export default function Panel() {

  return (
    <main className='bg-800-gray w-full h-screen flex'>
      <PanelAside />
      
      <Routes>
        <Route path='/home' element={<HomePanel />} />
        <Route path='/chat' element={<ChatPanel />} />
      </Routes>

    </main>
  )
}
