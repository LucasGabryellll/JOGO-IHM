import e from "express";
import { OpenRoomResponse } from "../model";
import { Message } from "../model/message";
import { io } from "../socketio";

import { addPlayer } from "./connectionClientController";

import { removePlayer } from "./disconnectionClientController";

import { createNewRoom, openRoom, outRoom, totalClientsInRoom } from "./roomsController";
import { refreshPlayer } from "./updateClientListController";
import { addPlayerInGame, addPlayerTwo, deleteGame, findGame, updatePlayerFocus, updateStatePlayer } from "./gammingController";
import { statusGamming } from "../model/gammingModal";
import { PlayerAnswerResponse } from "../model/playerAnswerReponse";

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

    // Adiciona o primeiro jogador na sala de jogo.
    addPlayerInGame({ playerOne: socket.id, roomId: id });
    const game = findGame(id);

    const gameState = statusGamming[game!];

    const state = {
      focus: socket.id,
      players: gameState.players,
      status: gameState.status
    }

    io.to(id).emit('updateStateGame', state)
  });

  socket.on('open_room', (data: OpenRoomResponse) => {
    const roomSize = io.sockets.adapter.rooms.get(data.codigo)?.size || 0;

    if (roomSize < 2) {
      console.log(`${socket.id} : ${data.usuario} - conectou na sala ${data?.codigo}`);
      socket.join(data.codigo);

      openRoom({ playerId: socket.id, roomId: data.codigo });

      // Adiciona o segundo jogador na sala de jogo.
      addPlayerTwo(data.codigo, socket.id);

      const game = findGame(data.codigo);

      const gameState = statusGamming[game!];
      gameState.status = true;

      socket.emit('entry_room', {
        sucess: true,
        message: 'Entrou na sala com sucesso',
        room: data.codigo
      });

      const state = {
        focus: gameState.playerInFocus,
        players: gameState.players,
        status: gameState.status
      }

      totalClientsInRoom(data.codigo);

      io.to(data.codigo).emit('updateStateGame', state);
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

  socket.on('playerAnswer', (data: PlayerAnswerResponse) => {
    updatePlayerFocus(data.room.id);

    const game = findGame(data.room.id);
    const gameState = statusGamming[game!];

    const cardPos = data.card.value;
    const type = data.card.type;

    updateStatePlayer(data.room.id, socket.id, type, cardPos);

    const state = {
      focus: gameState.playerInFocus,
      players: gameState.players,
      status: gameState.status
    }

    io.to(data.room.id).emit('updateStateGame', state);

  });

  socket.on('disconnect', () => {
    removePlayer({ id: socket.id });

    refreshPlayer();
  });
});