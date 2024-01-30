import { useState } from "react";

interface PlayerWinModel {
  player: string
}

export function PlayerWinState() {
  const [playerWin, setPlayerWin] = useState<PlayerWinModel>();

  return {
    playerWin,
    setPlayerWin
  }
}