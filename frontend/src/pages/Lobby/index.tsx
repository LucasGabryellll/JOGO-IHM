import { Background, Button, ContentGradient, Input, Modal } from "../../components";
import { useModalController } from "../../controller";
import { OptionsButtonLobby } from "../../model";

export function Lobby() {
  const { state: { isOpenModal, setIsOpenModal } } = useModalController();
  
  return (
    <Background>
      <ContentGradient description="ENTRAR EM UMA PARTIDA">
        {OptionsButtonLobby().map((value) => (
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

      <Modal key={'modal-enter-room'} isOpen={isOpenModal} onCloseModal={setIsOpenModal}>
        <Input description="CÓDIGO:" value="" placeholder="Cole o código da sala..." />
        <Input description="NOME:" value="" placeholder="Escolha um nome para seu personagem..." />
      </Modal>
    </Background>
  )
}