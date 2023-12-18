
import { statusGamming } from "../model/gammingModal";

interface GammingStateProps {
  playerOne: string;
  roomId: string;
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

function updateStatePlayer(roomId: string, player: string, type: 'moveBackward' | 'moveForward' | "answerQuestion", value: number) {
  const game = findGame(roomId);

  if (game !== -1) {
    if (statusGamming[game].players.playerOne.id === player) {
      const player = statusGamming[game].players.playerOne;

      const newValueReturn = player.pos - value < 0 ? 0 : player.pos - value;
      const newValueRun = player.pos + value > 37 ? 37 : player.pos + value

      type === "moveBackward" ? player.pos = newValueReturn : player.pos = newValueRun;

    } else {

      const player = statusGamming[game].players.playerTwo;

      const newValueReturn = player.pos - value < 0 ? 0 : player.pos - value;
      const newValueRun = player.pos + value > 37 ? 37 : player.pos + value

      type === "moveBackward" ? player.pos = newValueReturn : player.pos = newValueRun;

    }

  } else {
    null
  }
};

export {
  addPlayerInGame,
  findGame,
  updatePlayerFocus,
  deleteGame,
  addPlayerTwo,

  updateStatePlayer
}; 