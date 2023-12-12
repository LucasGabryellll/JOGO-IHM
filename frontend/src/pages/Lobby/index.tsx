import { Background, Button, ContentGradient, Modal } from "../../components";
import { useModalController } from "../../controller";
import { useSchemaValidade } from "../../hooks/useSchemaValidade";
import { OptionsButtonLobby, RoomSchema, roomSchema } from "../../model";
import { optionsInputOpenRoom } from "../../model/optionsModel";

export function Lobby() {
  const { state: { isOpenModal, setIsOpenModal } } = useModalController();
  const roomMethods = useSchemaValidade<RoomSchema>({ schemaYup: roomSchema });

  function handleOpenRoom(data: RoomSchema) {
    console.log("teste");

    console.log(data)
  }

  return (
    <Background>
      <ContentGradient description="ENTRAR EM UMA PARTIDA">
        {OptionsButtonLobby({ handleOpenRoom: () => setIsOpenModal(true) }).map((value) => (
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
          onSendForm={handleOpenRoom}
          useFormMethods={roomMethods}
          dateInputs={optionsInputOpenRoom}
        />
      </Modal.Root>
    </Background>
  )
}