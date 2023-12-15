import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../../service/socketio";
import { useNavigation } from "../../hooks/useNavigation";
import { GameContext } from "../../context/GameContext";

export function GammingFetch() {
  const { roomId } = useParams();
  const { navigation } = useNavigation();

  const { room, onSelectRoom } = useContext(GameContext);
  const [usersInRoom, setUsersInRoom] = useState<number>(0);
  

  function closeRoom() {
    socket.emit('out_room', room);
    navigation('/');
    console.log("saiu da sala", room);
  }

  function loadRoom() {
    if (roomId && !room) {
      onSelectRoom(roomId);
    }
  }

  useEffect(() => {
    loadRoom();
  }, [])

  useEffect(() => {
    socket.on('update_room_user', users => setUsersInRoom(users));
  }, [socket]);

  return {
    usersInRoom,
    room,
    closeRoom
  }
}