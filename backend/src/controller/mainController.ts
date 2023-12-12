import { Room, roomsInGame } from "../model";
import { io } from "../socketio";

import { refreshPlayer, addPlayer } from "./connectionClientController";
import { removePlayer } from "./disconnectionClientController";

io.on("connection", socket => {
  console.log(`${socket.id} conectado.`);

  const name = `Player_${socket.id.substring(0, 5)}`;
  addPlayer({ id: socket.id, name, status: 'lobby' });
 
  socket.on("select_room", (data: Room) => {
    
  });

  socket.on('disconnect', () => {
    removePlayer({ id: socket.id });
    refreshPlayer();
  });
});