import { useContext, useEffect, useState } from "react";

import { socket } from "../../service/socketio";
import { useNavigation } from "../../hooks/useNavigation";
import { GameContext } from "../../context/GameContext";
import { StatusGamming } from "../../model/statusGame";

export function GammingFetch() {
  const { navigation } = useNavigation();

  const { room, username } = useContext(GameContext);
  const [usersInRoom, setUsersInRoom] = useState<number>(0);

  const [statusGame, setStatusGame] = useState<StatusGamming>();

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