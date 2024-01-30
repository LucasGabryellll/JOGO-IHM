import {
  Background,
  ButtonOptions,
  HeaderUserPoints,
  Chat,
  Modal,
  Carts,
  Map,
  Player,
  GetBonus,
  GameOver
} from "../../components";

import { useGammingController } from "../../controller/useGammingController";
import { useListenGetBonus } from "../../controller/useListenGetBonus";
import { socket } from "../../service/socketio";

import styles from "./styles.module.css";

export function Gamming() {
  const { gammingFetch } = useGammingController();
  const { closeRoom, usersInRoom, room, username, statusGame } = gammingFetch();

  const { listenBonusFetch } = useListenGetBonus();
  const { bonus } = listenBonusFetch();

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
        {bonus?.player === socket.id &&
          <>
            {GetBonus({ value: bonus.valueBonus })}
          </>
        }

        {statusGame?.players &&
          <>
            <Player
              type="man"
              playerStatus={statusGame.players.playerOne}
              status={statusGame?.status}
              name={username.toUpperCase()}
            />

            <Player
              type="woman"
              playerStatus={statusGame.players.playerTwo}
              status={statusGame?.status}
              name={username.toUpperCase()}
            />
          </>
        }
      </Map>

      <Chat />

      {<>{GameOver()}</>}

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