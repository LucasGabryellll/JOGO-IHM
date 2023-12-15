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

    socket.emit('entry_room', {
      sucess: true,
      message: 'Entrou na sala com sucesso',
      room: id
    });
  });

  socket.on('open_room', (data: OpenRoomResponse) => {
    const roomSize = io.sockets.adapter.rooms.get(data.codigo)?.size || 0;

    if (roomSize < 2) {
      console.log(`${socket.id} : ${data.usuario} - conectou na sala ${data?.codigo}`);
      socket.join(data.codigo);

      openRoom({ playerId: socket.id, roomId: data.codigo });

      socket.emit('entry_room', {
        sucess: true,
        message: 'Entrou na sala com sucesso',
        room: data.codigo
      });

      totalClientsInRoom(data.codigo);
    }

    else {
      socket.emit('entry_room', {
        sucess: false,
        message: 'A Sala está cheia, tente outra.',
        room: data.codigo
      });
    }
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
    socket.leave(room);

    totalClientsInRoom(room);
  });

  socket.on('disconnect', () => {
    removePlayer({ id: socket.id });
    refreshPlayer();
  });
});