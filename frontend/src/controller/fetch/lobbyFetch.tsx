import { useContext } from "react";

import { useSchemaValidade } from "../../hooks/useSchemaValidade";
import { useNavigation } from "../../hooks/useNavigation";

import { RoomSchema, roomSchema } from "../../model";
import { socket } from "../../service/socketio";
import { GameContext } from "../../context/GameContext";

import { useModalController } from "..";
import { NotificationType, toasty } from "../../components";

import { OpenRoomResponse } from "../../model/openRoomResponse";

export function LobbyFetch() {
  const roomMethods = useSchemaValidade<RoomSchema>({ schemaYup: roomSchema });

  const { onSelectRoom } = useContext(GameContext);
  const { navigation } = useNavigation();

  const { state: { isOpenModal, setIsOpenModal } } = useModalController();

  function onCreateRoom() {
    socket.emit('create_room');

    socket.on('entry_room', (room: OpenRoomResponse) => {
      if (room.sucess) {
        onSelectRoom(room.room)

        navigation(`/partida/${room.room}`);
      }
    });
  }

  function onOpenRoom(data: RoomSchema) {
    socket.emit('open_room', data);

    socket.on('entry_room', (response: OpenRoomResponse) => {
      if (response.sucess) {
        onSelectRoom(response.room);

        navigation(`/partida/${response.room}`);
  
        roomMethods.resetField("codigo");

        setIsOpenModal(false);
  
        toasty({ message: response.message, type: NotificationType.SUCCESS });
  
      } else {
        toasty({ message: response.message, type: NotificationType.ERROR });
        console.log(response.message)
      }
    })
    
  }

  return {
    onCreateRoom,
    onOpenRoom,
    setIsOpenModal,

    isOpenModal,
    roomMethods
  }
}