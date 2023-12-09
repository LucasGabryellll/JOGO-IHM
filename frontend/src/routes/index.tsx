import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Lobby } from '../pages'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/entrar-em-partida' element={<Lobby />} />

      </Routes>
    </Router>
  )
}