import { Login, Register, Panel } from '../pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/panel' element={<Panel />} />
    </Routes>
  )
}
