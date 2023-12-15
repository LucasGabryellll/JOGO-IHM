import { OpenRoomResponse } from "../model";
import { Message } from "../model/message";
import { io } from "../socketio";

import { addPlayer } from "./connectionClientController";

import { removePlayer } from "./disconnectionClientController";
import { createNewRoom, openRoom, outRoom, totalClientsInRoom } from "./roomsController";
import { refreshPlayer } from "./updateClientListController";

io.on("connection", socket => {
  console.log(`${socket.id} conectado.`);

  const name = `Player_${socket.id.substring(0, 5)}`;
  addPlayer({ id: socket.id, name });

  socket.on('create_room', () => {
    const id = createNewRoom();

    socket.join(id);
    console.log(`${socket.id} criou a sala: ${id}`);

    openRoom({ playerId: socket.id, roomId: id });

    socket.emit("entry_room", id);

    //io.to(id).emit('update_room_user', 1);
  });

  socket.on('open_room', (data: OpenRoomResponse) => {
    console.log(`${socket.id} : ${data.usuario} - conectou na sala ${data?.codigo}`);

    socket.join(data.codigo);
    
    openRoom({ playerId: socket.id, roomId: data.codigo });

    const roomSize = io.sockets.adapter.rooms.get(data.codigo)?.size || 0;

    //io.to(data.codigo).emit('update_room_user', roomSize);
    totalClientsInRoom(data.codigo)
  });

  socket.on('send_message', (data: Message) => {
    const formatMessage = {
      userSend: socket.id,
      message: data.message,
      room: data.room,
      createdAt: data.createdAt,
      userId: data.userId
    };

    io.to(data.room).emit("receive_message", formatMessage);
  });

  socket.on('out_room', (room) => {
    outRoom({ playerId: socket.id, roomId: room });
    //console.log('saiu da sal')
    socket.leave(room);

    totalClientsInRoom(room);
  });

  socket.on('disconnect', () => {
    removePlayer({ id: socket.id });
    refreshPlayer();
  });
});