import { ReactNode, createContext, useState } from 'react';
import { GameContextProps } from '../model/contextProps/gameContextProps';
//import { useConnectSocket } from '../hooks/useConnectSocket';
//import { socket } from '../service/socketio';

const GameContext = createContext<GameContextProps>({
  room: '',
  username: '',
  onSelectRoom: () => { },
  onSelectUsername: () => { }
});

interface GameProviderProps {
  children: ReactNode
}

function GameProvider({ children }: GameProviderProps) {
  const [room, setRoom] = useState('');
  const [username, setUsername] = useState('');

  function onSelectRoom(value: string) {
    setRoom(value)
  }

  function onSelectUsername(value: string) {
    setUsername(value)
  }

  //useConnectSocket();
  
  return (
    <GameContext.Provider value={{ room, username, onSelectRoom, onSelectUsername }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext };