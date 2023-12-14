import { players, Player } from "../model";
import { refreshPlayer } from "./updateClientListController";

const addPlayer = ({ id, name }: Player) => {
  players.push({ id, name });

  refreshPlayer();
}

export { addPlayer };