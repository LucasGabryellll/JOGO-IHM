import { io } from "../socketio";

import { players } from "../model";

function refreshPlayer() {
  io.emit("player_refresh", players);
}

export { refreshPlayer }