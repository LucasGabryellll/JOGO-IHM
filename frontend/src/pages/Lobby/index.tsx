import { Background, Button, ButtonOptions, ContentGradient, Modal } from "../../components";
import { useLobbyController } from "../../controller";

import { OptionsButtonLobby, RoomSchema } from "../../model";
import { optionsInputOpenRoom } from "../../model/optionsModel";

export function Lobby() {
  const { lobbyController } = useLobbyController();
  const fetch = lobbyController();

  const { isOpenModal, onCreateRoom, onOpenRoom, roomMethods, setIsOpenModal } = fetch;

  return (
    <Background>
      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => { }} />
      </ButtonOptions.Root>

      <ContentGradient description="ENTRAR EM UMA PARTIDA">
        {OptionsButtonLobby({ handleOpenRoom: () => setIsOpenModal(true), handleCreateRoom: onCreateRoom }).map((value) => (
          <div
            key={`options-buttons-lobby-${value.id}`}
            style={{ height: 100, width: '100%' }}
          >
            <Button.Root
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