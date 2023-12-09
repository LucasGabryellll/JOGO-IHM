import { Player } from "./playerModel";

interface Room {
  id: string;
  status: 'active' | 'desable'
}

interface RoomsInGame {
  result: {
    id: string;
    isGameRunning: boolean;
    playersInRoom: Player[]
  }[]
}

const roomsAccessible: Room[] = [];

const roomsInGame: RoomsInGame = { result: [] };


export { roomsAccessible, roomsInGame };

export { Room, RoomsInGame };