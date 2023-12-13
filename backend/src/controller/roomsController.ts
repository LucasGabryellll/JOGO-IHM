import { v4 } from 'uuid';
import { RoomsInGame, roomsAccessible } from '../model/roomGameModel';
import { players } from '../model/playerModel';

interface OpenRoomProps {
  playerId: string;
  roomId: string;
}

function getAllRoom() {
  return roomsAccessible;
}

function getRoom(roomId: string) {
  const room = roomsAccessible.find(rooms => roomId === rooms.id);

  return room;
}

function createNewRoom() {
  const rooms = roomsAccessible;
  const id = v4().slice(0, 6);

  const newRoom: RoomsInGame = { id, status: "active", playersInRoom: [] };

  rooms.push(newRoom);

  return id;
}

function deleteRoom(id: string) {
  const room = roomsAccessible.findIndex(value => value.id === id);

  if (room !== -1) {
    roomsAccessible.splice(room, 1);
  }
}

function outRoom({ playerId, roomId }: OpenRoomProps) {
  const room = roomsAccessible.find(rooms => roomId === rooms.id);

  room?.playersInRoom.filter(player => playerId !== player.id);
}

function openRoom({ playerId, roomId }: OpenRoomProps) {
  const player = players.find(player => playerId === player.id);
  const room = roomsAccessible.find(rooms => roomId === rooms.id);

  if (player) {
    room?.playersInRoom.push({
      id: player.id,
      name: player.name,
      status: 'lobby'
    });
  }
}

export {
  createNewRoom,
  deleteRoom,
  openRoom,
  outRoom,

  getAllRoom,
  getRoom
}