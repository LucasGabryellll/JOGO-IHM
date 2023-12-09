import { io } from '../socketio';
import { v4 } from 'uuid';
import { Room, roomsAccessible } from '../model';

function createNewRoom() {
  const rooms = roomsAccessible;
  const id = v4().slice(0, 8);

  const newRoom: Room = { id, status: "active" };

  rooms.push(newRoom);

  io.emit("createRoom", () => `Sala ${id} criada com sucesso.`);
}

function deleteRoom(id: string) {
  const room = roomsAccessible.findIndex(value => value.id === id);

  if (room !== -1) {
    roomsAccessible.splice(room, 1);
  }

  io.emit("deleteRoom", () => `Sala deletada.`);
}

function openRoom() {
  
}

export {
  createNewRoom,
  deleteRoom
}