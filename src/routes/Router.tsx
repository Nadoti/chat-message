
import { Suspense, lazy, useEffect } from 'react'
import { Login, Register } from '../pages'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const RoutePanel = lazy(() => import('../pages/Panel'))

export function Router() {
  const { pathname } = useLocation();
    const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate("/login")
    }
  },[])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
        <Route path='/panel/*' element={
          <Suspense fallback={<h1>CARREGANDO</h1>}>
              <RoutePanel />
          </Suspense>
        }/>
    </Routes>
  )
}
