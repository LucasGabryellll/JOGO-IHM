import { useContext } from "react";
import { useSchemaValidade } from "../../hooks/useSchemaValidade";
import { RoomSchema, roomSchema } from "../../model";
import { socket } from "../../service/socketio";
import { GameContext } from "../../context/GameContext";
import { useNavigation } from "../../hooks/useNavigation";
import { useModalController } from "..";

export function LobbyFetch() {
  const roomMethods = useSchemaValidade<RoomSchema>({ schemaYup: roomSchema });
  const { onSelectRoom ,onSelectUsername } = useContext(GameContext);
  const { navigation } = useNavigation();
  
  const { state: { isOpenModal, setIsOpenModal } } = useModalController();

  function onCreateRoom() {
    socket.emit('create_room');

    socket.on('entry_room', room => {
      if (room) {
        onSelectRoom(room)

        onSelectUsername("ADMIN");

        navigation(`/partida/${room}`);
      }
    });
  }

  function onOpenRoom(data: RoomSchema) {
    socket.emit('open_room', data);

    onSelectRoom(data.codigo);
    onSelectUsername(data.usuario);
    navigation(`/partida/${data.codigo}`);

    roomMethods.resetField("codigo");
    roomMethods.resetField("usuario");

    setIsOpenModal(false);
  }

  return {
    onCreateRoom,
    onOpenRoom,
    setIsOpenModal,
    
    isOpenModal,
    roomMethods
  }
}