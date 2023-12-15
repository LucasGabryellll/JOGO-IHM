import { useContext, useState } from "react";

import { socket } from "../../service/socketio";
import { useNavigation } from "../../hooks/useNavigation";
import { GameContext } from "../../context/GameContext";

export function GammingFetch() {
  const { navigation } = useNavigation();

  const { room, username } = useContext(GameContext);
  const [usersInRoom, setUsersInRoom] = useState<number>(0);

  function closeRoom() {
    socket.emit('out_room', room);
    navigation('/');
    console.log("saiu da sala", room);
  }

  socket.on('update_room_user', users => setUsersInRoom(users));

  return {
    usersInRoom,
    username,
    room,
    closeRoom
  }
}