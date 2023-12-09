import { io } from "../socketio";

import { clients, Player } from "../model";

function refreshPlayer() {
  io.emit("player_refresh", clients.players);
}

const addPlayer = ({ id, name, status }: Player) => {
  clients.players.push({ id, name, status });

  refreshPlayer();
}

export { addPlayer, refreshPlayer };