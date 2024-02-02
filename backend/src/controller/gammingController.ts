import { statusGamming } from "../model/gammingModal";
import { TypePos, posMap } from "../model/mapGameModal";
import { io } from "../socketio";
import { onGetBonus, playerWin, sendChallenge } from "./positionController";

interface GammingStateProps {
  playerOne: string;
  roomId: string;
}

interface onStatusPosProps {
  player: { id: string, pos: number };
  type: 'moveBackward' | 'moveForward' | "answerQuestion";
  roomId: string;
  value?: number;
}

function addPlayerInGame({ playerOne, roomId }: GammingStateProps) {
  statusGamming.push({
    playerInFocus: playerOne,
    players: {
      playerOne: {
        id: playerOne,
        pos: 0
      },
      playerTwo: {
        id: '',
        pos: 0
      }
    },
    playerWin: '',
    roomId,
    status: false
  });
}

function findGame(roomID: string) {
  const game = statusGamming.findIndex(games => roomID === games.roomId);

  return game;
}

function addPlayerTwo(roomId: string, player: string) {

  const game = findGame(roomId);

  if (game !== -1) {
    statusGamming[game].players.playerTwo.id = player;

  } else {
    console.log('Erro ao adicionar segundo player, sala não encontrada');
  }
}

function updatePlayerFocus(roomId: string) {
  const game = findGame(roomId);

  if (game !== -1) {
    const playerCurrentFocus = statusGamming[game].playerInFocus;

    const playerOne = statusGamming[game].players.playerOne.id;
    const playerTwo = statusGamming[game].players.playerTwo.id;

    if (playerCurrentFocus === playerOne) {
      statusGamming[game].playerInFocus = playerTwo;
    }

    else {
      statusGamming[game].playerInFocus = playerOne;
    }
  }
}

function deleteGame(roomId: string) {
  const game = findGame(roomId);

  game !== -1 ? statusGamming.splice(game, 1) : null;
}

function updateStatePlayer(
  roomId: string,
  player: string,
  type: 'moveBackward' | 'moveForward' | "answerQuestion",
  value: number
) {
  const game = findGame(roomId);

  if (game !== -1) {
    if (statusGamming[game].players.playerOne.id === player) {
      const player = statusGamming[game].players.playerOne;

      onPosPlayer({ player, type, value, roomId });

    } else {
      const player = statusGamming[game].players.playerTwo;

      onPosPlayer({ player, type, value, roomId });
    }

  } else {
    null
  }
};

async function onPosPlayer({ player, type, value, roomId }: onStatusPosProps) {
  if (value) {
    const newValueReturn = player.pos - value < 0 ? 0 : player.pos - value;
    const newValueRun = player.pos + value > 37 ? 37 : player.pos + value;

    /**
     * Se o tipo da carta for de retorno cai aqui.
     */
    if (type === "moveBackward") {
      const posPlayerInMap = posMap[newValueReturn];

      switch (posPlayerInMap.typePos) {
        case TypePos.initial:
          player.pos = newValueReturn;

          break;
        case TypePos.normal:
          player.pos = newValueReturn;

          break;
        case TypePos.bonus:
          const valueBonus = Math.floor(Math.random() * 5) + 1;

          onGetBonus({ bonus: valueBonus, playerId: player.id, roomId });

          player.pos = newValueRun + valueBonus;

          break;
        case TypePos.quiz:
          player.pos = newValueReturn;
          const codigo = roomId.toUpperCase()

          const game = findGame(codigo);
          const gameState = statusGamming[game!];

          const state = {
            focus: player,
            players: gameState.players,
            status: false,
          }

          sendChallenge({ playerId: player.id, roomId });

          io.to(codigo).emit("updateStateGame", state);

          break;
      }
    }

    /**
     * Se o tipo de carta for para avançar.
     */
    else if (type === "moveForward") {
      const posPlayerInMap = posMap[newValueRun];

      switch (posPlayerInMap.typePos) {
        case TypePos.normal:

          player.pos = newValueRun;

          break;
        case TypePos.bonus:
          const valueBonus = Math.floor(Math.random() * 5) + 1;

          onGetBonus({ bonus: valueBonus, playerId: player.id, roomId });

          player.pos = newValueRun + valueBonus;

          break;

        case TypePos.quiz:
          player.pos = newValueRun;
          const codigo = roomId.toUpperCase()

          const game = findGame(codigo);
          const gameState = statusGamming[game!];

          const state = {
            focus: player,
            players: gameState.players,
            status: false,
          }

          sendChallenge({ playerId: player.id, roomId });

          io.to(codigo).emit("updateStateGame", state);

          break;

        case TypePos.final:
          playerWin({ playerId: player.id, roomId });

          player.pos = 37;

          break;
      }
    }
  }

  /**
   * Se não tiver value é porque a carta é do tipo responder pergunta
   */
}

function updatePosPlayerFrame(posInitial: number, posFinal: number, type: 'm' | 'r') {
  /** Se for para avançar m=move */
  if (type === 'm') {
    for (var i = posInitial; i < posFinal; i++) {
      io.to('').emit('update_pos_player', {
        id: '',
        pos: i
      });
    }
  }

  else {

  }
}

export {
  addPlayerInGame,
  findGame,
  updatePlayerFocus,
  deleteGame,
  addPlayerTwo,

  updateStatePlayer
}; 