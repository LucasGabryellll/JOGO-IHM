import { questions, WordProps } from "../model/questionsModel";
import { io } from "../socketio";

interface OnGetBonusProps {
  roomId: string,
  playerId: string,
  bonus: number
}

interface ChallengeProps {
  roomId: string;
  playerId: string;
}

interface PlayerWin {
  roomId: string;
  playerId: string
}

function onGetBonus({ roomId, playerId, bonus }: OnGetBonusProps) {
  io.to(roomId).emit("get_bonus", {
    player: playerId,
    valueBonus: bonus
  });
}

function playerWin({ playerId, roomId }: PlayerWin) {
  io.to(roomId).emit("game_over", {
    player: playerId,
  });
}

function sendChallenge({ playerId, roomId }: ChallengeProps) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  const challenge = randomQuestion.original_word.split(' ');

  let listWord: WordProps[] = [];

  challenge.map((value, index) => {
    listWord.push({
      id: `${index}`,
      name: value
    })
  })

  io.to(roomId).emit("open_challenge", {
    player: playerId,
    question: randomQuestion,
    challengeWords: listWord
  })
}

export {
  onGetBonus,
  playerWin,

  sendChallenge
}