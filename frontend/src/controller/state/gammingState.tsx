import { useState } from "react";
import { StatusGamming } from "../../model/statusGame";

export function GameState() {
  const [usersInRoom, setUsersInRoom] = useState<number>(0);

  const [statusGame, setStatusGame] = useState<StatusGamming>();

  const [playerChallenge, setPlayerChallenge] = useState<String>("");

  return {
    usersInRoom, setUsersInRoom,

    statusGame, setStatusGame,

    playerChallenge, setPlayerChallenge
  }
}