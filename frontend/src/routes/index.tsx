import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login, Home, Lobby, Credits, Tutorial, Gamming } from '../pages';
import { AudioPlayer } from '../components/AudioPlayer';
import { useContext } from 'react';
import { AudioContext } from '../context/AudioContext';

export function AppRoutes() {
  const { audioRef } = useContext(AudioContext);

  return (
    <Router>
      <AudioPlayer
        audioRef={audioRef}
      />

      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/home' element={<Home/>} />

        <Route path='/tutorial' element={<Tutorial/>}/>

        <Route path='/entrar-em-partida' element={<Lobby />} />

        <Route path='/creditos' element={<Credits/>}/>

        <Route path='/partida/:room' element={<Gamming/>}/>
      </Routes>
    </Router>
  )
}