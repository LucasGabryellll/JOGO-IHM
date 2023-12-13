
import { Background, Button, ButtonOptions, ContentGradient, Modal } from "../../components";
import { useModalController } from "../../controller";
import { useNavigation } from "../../hooks/useNavigation";
import { useSchemaValidade } from "../../hooks/useSchemaValidade";
import { OptionsButtonLobby, RoomSchema, roomSchema } from "../../model";
import { optionsInputOpenRoom } from "../../model/optionsModel";
import { socket } from "../../service/socketio";

export function Lobby() {
  const { state: { isOpenModal, setIsOpenModal } } = useModalController();
  const roomMethods = useSchemaValidade<RoomSchema>({ schemaYup: roomSchema });

  const { navigation } = useNavigation();

  function onCreateRoom() {
    socket.emit("create_room");

    console.log("sala criada")

    navigation("/partida");
  }

  function onOpenRoom(data: RoomSchema) {
    socket.emit('open_room', data);
    
    roomMethods.resetField("codigo");
    roomMethods.resetField("usuario");

    navigation("/partida");
    setIsOpenModal(false);
  }

  return (
    <Background>
      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => { }}/>
      </ButtonOptions.Root>

      <ContentGradient description="ENTRAR EM UMA PARTIDA">
        {OptionsButtonLobby({ handleOpenRoom: () => setIsOpenModal(true), handleCreateRoom: onCreateRoom }).map((value) => (
          <div style={{ height: 100, width: '100%' }}>
            <Button.Root
              key={`options-buttons-lobby-${value.id}`}
              description={value.description}
              onPress={value.onPress}
            >
              <Button.Icon Icon={value.Icon} />
            </Button.Root>
          </div>
        ))}
      </ContentGradient>

      <Modal.Root
        key={'modal-enter-room'}
        isOpen={isOpenModal}
        onCloseModal={setIsOpenModal}
      >
        <Modal.Form<RoomSchema>
          onSendForm={onOpenRoom}
          useFormMethods={roomMethods}
          dateInputs={optionsInputOpenRoom}
        />
      </Modal.Root>
    </Background>
  )
}