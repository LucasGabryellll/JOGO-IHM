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
  GameOver,
  QuestionComponent
} from "../../components";

import { useGammingController } from "../../controller/useGammingController";
import { useListenGetBonus } from "../../controller/useListenGetBonus";
import { useQuestionController } from "../../controller/useQuesitonController";

import { socket } from "../../service/socketio";

import styles from "./styles.module.css";

export function Gamming() {
  const { gammingFetch } = useGammingController();
  const { closeRoom, usersInRoom, room, username, statusGame } = gammingFetch();

  const { listenBonusFetch } = useListenGetBonus();
  const { bonus } = listenBonusFetch();

  const { questionFetch } = useQuestionController();
  const questionController = questionFetch();

  const { playerPoints, handleResponse } = questionController;

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

      <HeaderUserPoints 
        challengeCorrent={playerPoints.correct}
        challengeIncorrect={playerPoints.incorrect}
        totalPoints={playerPoints.totalPoints}
      />

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

      {questionController.playerChallenge &&
        <QuestionComponent
          isOpen={questionController.playerChallenge === socket.id}
          onDragWord={questionController.onDragWord}
          question={questionController.question}
          words={questionController.words}
          wordsOrganized={questionController.wordsOrganized}
          room={room}

          handleResponse={handleResponse}
        />
      }

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