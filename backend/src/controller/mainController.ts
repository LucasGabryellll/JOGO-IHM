import { OpenRoomResponse } from "../model";
import { io } from "../socketio";

import { addPlayer } from "./connectionClientController";

import { removePlayer } from "./disconnectionClientController";
import { createNewRoom, openRoom, outRoom } from "./roomsController";
import { refreshPlayer } from "./updateClientListController";

io.on("connection", socket => {
  console.log(`${socket.id} conectado.`);
  
  const name = `Player_${socket.id.substring(0, 5)}`;
  addPlayer({ id: socket.id, name });

  socket.on('create_room', () => {
    const id = createNewRoom();
    
    openRoom({ playerId: socket.id, roomId: id });
  });

  socket.on('open_room', (data: OpenRoomResponse) => {
    console.log(`${socket.id} : ${data.usuario} - conectou na sala ${data?.codigo}`);
  });

  socket.on('send_message', message => {
    const formatMessage = {
      userSend: socket.id,
      message
    };
    
    io.emit('receive_message', formatMessage);
  });

  socket.on('out_room', (room) => {
    outRoom({ playerId: socket.id, roomId: room?.id });
  });

  socket.on('disconnect', () => {
    removePlayer({ id: socket.id });
    refreshPlayer();
  });
});