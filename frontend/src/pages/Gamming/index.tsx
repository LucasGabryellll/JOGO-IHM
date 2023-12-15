import { Background, ButtonOptions, HeaderUserPoints, Chat, Modal, Carts } from "../../components";
import { useGammingController } from "../../controller/useGammingController";

export function Gamming() {
  const { gammingFetch } = useGammingController();
  const { closeRoom, usersInRoom, room, username } = gammingFetch();

  return (
    <Background>
      <Modal.Root isOpen={usersInRoom < 2} onCloseModal={closeRoom}>
        <div>
          AGUARDANDO OUTRO USUÁRIO SE CONECTAR...
          <p>O Código da sala é: {room}</p>
        </div>
      </Modal.Root>

      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => console.log("Sound")} />
        <ButtonOptions.Icon type="help" action={() => console.log("help")} />
        <ButtonOptions.Icon type="close" action={closeRoom} />
      </ButtonOptions.Root>

      <HeaderUserPoints />

      <Chat />

      <Carts namePlayer={`JOGADOR: ${username}`} isOpen={false} />
    </Background>
  )
}