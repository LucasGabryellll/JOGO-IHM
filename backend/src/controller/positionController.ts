import { io } from "../socketio";

interface OnGetBonusProps {
  roomId: string,
  playerId: string,
  bonus: number
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

export {
  onGetBonus,
  playerWin
}