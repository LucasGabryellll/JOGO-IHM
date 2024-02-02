import { useContext, useEffect } from "react";

import { socket } from "../../service/socketio";
import { useNavigation } from "../../hooks/useNavigation";
import { GameContext } from "../../context/GameContext";

import { GameState } from "../state/gammingState";

export function GammingFetch() {
  const { navigation } = useNavigation();

  const { room, username } = useContext(GameContext);
  const { setStatusGame, setUsersInRoom, statusGame, usersInRoom } = GameState();

  function closeRoom() {
    socket.emit('out_room', room);
    navigation('/home');
    console.log("saiu da sala", room);
  }

  socket.on('update_room_user', users => setUsersInRoom(users));

  useEffect(() => {
    socket.on('updateStateGame', data => setStatusGame(data));
  }, [socket]);

  return {
    usersInRoom,
    username,
    room,
    statusGame,

    closeRoom
  }
}