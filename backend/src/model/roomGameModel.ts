import { Player } from "./playerModel";

interface RoomsInGame {
  id: string;
  playersInRoom: Player[]
}

interface OpenRoomResponse {
  codigo: string;
  usuario: string;
}

const roomsAccessible: RoomsInGame[] = [];

export { RoomsInGame, OpenRoomResponse };

export { roomsAccessible };