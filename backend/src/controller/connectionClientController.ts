import { io } from "../socketio";

import { players, Player } from "../model";

function refreshPlayer() {
  io.emit("player_refresh", players);
}

const addPlayer = ({ id, name, status }: Player) => {
  players.push({ id, name, status });

  refreshPlayer();
}

export { addPlayer, refreshPlayer };