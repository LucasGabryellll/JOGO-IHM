import { v4 } from 'uuid';
import { RoomsInGame, roomsAccessible } from '../model/roomGameModel';
import { players } from '../model/playerModel';
import { io } from '../socketio';

interface OpenRoomProps {
  playerId: string;
  roomId: string;
}

function getAllRoom() {
  return roomsAccessible;
}

function getRoom(roomId: string) {
  const room = roomsAccessible.find(rooms => roomId.toUpperCase() === rooms.id);

  return room;
}

function createNewRoom() {
  const rooms = roomsAccessible;
  const id = v4().slice(0, 6).toUpperCase();

  const newRoom: RoomsInGame = { id, playersInRoom: [] };

  rooms.push(newRoom);

  return id;
}

function deleteRoom(id: string) {
  const room = roomsAccessible.findIndex(value => value.id === id.toUpperCase());

  if (room !== -1) {
    roomsAccessible.splice(room, 1);
  }
}

function outRoom({ playerId, roomId }: OpenRoomProps) {
  const room = roomsAccessible.find(rooms => roomId.toUpperCase() === rooms.id);

  room?.playersInRoom.filter(player => playerId !== player.id);

  console.log(`${playerId}: saiu da sala: ${roomId}`);
}

function openRoom({ playerId, roomId }: OpenRoomProps) {
  const player = players.find(player => playerId === player.id);
  const room = getRoom(roomId);

  if (player && room) {
    room?.playersInRoom.push({
      id: player.id,
      name: player.name,
    });
  } 
  
  else {
    return console.log("Sala não existe.");
  }
}

function totalClientsInRoom(room: string) {
  const roomSize = io.sockets.adapter.rooms.get(room.toUpperCase())?.size || 0;

  io.to(room.toUpperCase()).emit("update_room_user", roomSize);
}

export {
  createNewRoom,
  deleteRoom,
  openRoom,
  outRoom,

  getAllRoom,
  getRoom,

  totalClientsInRoom
}