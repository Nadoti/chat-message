import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PanelAside } from '../components'

const RoutePanelHome = lazy(() => import('../components/pages/panel/home/HomePanel'))
const RouteChatPanel = lazy(() => import('../components/pages/panel/chat/ChatPanel'))

export default function Panel() {


  return (
    <main className='bg-800-gray w-full h-screen flex'>
      <PanelAside />
      
      <Routes>
        <Route path='/home' element={
          <Suspense fallback={<h1>CARREGANDO</h1>}>
              <RoutePanelHome />
          </Suspense>
        }/>

        <Route path='/chat' element={
          <Suspense fallback={<h1>CARREGANDO</h1>}>
              <RouteChatPanel />
          </Suspense>
        }/>
      </Routes>

    </main>
  )
}
