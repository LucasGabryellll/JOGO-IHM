import { useEffect } from "react";
import { PlayerWinState } from "../state/playerWinState";
import { socket } from "../../service/socketio";

export function PlayerWinFetch() {
  const { playerWin, setPlayerWin } = PlayerWinState();

  useEffect(() => {
    socket.on("game_over", state => setPlayerWin(state));
  }, [socket]);

  return {
    playerWin
  }
}