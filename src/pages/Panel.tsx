import React from 'react'
import { PanelAside, PanelChat } from '../components'

export default function Panel() {

  const mensagens = [
    {
      id: 1,
      name: 'Douglas',
      menssage: 'Olá Pessoas, tudo bem com vcs ?',
      img: 'd'
    }
  ]

  return (
    <main className='bg-800-gray w-full h-screen grid grid-cols-[100px_minmax(900px,_1fr)] items-start'>
      <PanelAside />
      <PanelChat />

    </main>
  )
}
