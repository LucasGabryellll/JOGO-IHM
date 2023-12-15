import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Lobby, Credits } from '../pages'
import { Gamming } from '../pages/Gamming'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/entrar-em-partida' element={<Lobby />} />

        <Route path='/creditos' element={<Credits/>}/>

        <Route path='/partida/:room' element={<Gamming/>}/>
      </Routes>
    </Router>
  )
}