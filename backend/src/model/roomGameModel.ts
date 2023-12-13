import { Player } from "./playerModel";

interface RoomsInGame {
  id: string;
  status: 'active' | 'desable';
  playersInRoom: Player[]
}

interface OpenRoomResponse {
  codigo: string;
  usuario: string;
}

const roomsAccessible: RoomsInGame[] = [];

export { RoomsInGame, OpenRoomResponse };

export { roomsAccessible };