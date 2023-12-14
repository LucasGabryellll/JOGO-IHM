import { io } from "../socketio";

import {clients} from "../model";

function refreshPlayer() {
  io.emit("player_refresh", clients);
}

export { refreshPlayer }