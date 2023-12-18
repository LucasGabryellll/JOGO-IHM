import {
  Background,
  ButtonOptions,
  HeaderUserPoints,
  Chat,
  Modal,
  Carts,
  Map,
  Player
} from "../../components";

import { useGammingController } from "../../controller/useGammingController";
import { socket } from "../../service/socketio";

import styles from "./styles.module.css";

export function Gamming() {
  const { gammingFetch } = useGammingController();
  const { closeRoom, usersInRoom, room, username, statusGame } = gammingFetch();

  return (
    <Background>
      <Modal.Root isOpen={usersInRoom < 2} onCloseModal={closeRoom}>
        <div className={styles['modal-info']}>
          AGUARDANDO OUTRO USUÁRIO SE CONECTAR...
          <div className={styles['cod-room']}>O Código da sala é:
            <p className={styles.room}>{room.toUpperCase()}</p>
          </div>
        </div>
      </Modal.Root>

      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => console.log("Sound")} />
        <ButtonOptions.Icon type="help" action={() => console.log("help")} />
        <ButtonOptions.Icon type="close" action={closeRoom} />
      </ButtonOptions.Root>

      <HeaderUserPoints />

      <Map>
        {statusGame?.players &&
          <>
            <Player
              type="man"
              playerStatus={statusGame.players.playerOne}
              status={statusGame?.status}
              name={username}
            />

            <Player
              type="woman"
              playerStatus={statusGame.players.playerTwo}
              status={statusGame?.status}
              name={username}
            />
          </>
        }
      </Map>

      <Chat />

      {statusGame?.status &&
        <Carts
          namePlayer={`JOGADOR: ${username.toUpperCase()}`}
          isOpen={statusGame?.focus === socket.id}
          room={room}
        />
      }
    </Background>
  )
}