

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Panel from '../pages/Panel'
import Register from '../pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/panel' element={<Panel />} />
    </Routes>
  )
}
