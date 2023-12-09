import { clients, Id } from "../model";

const removePlayer = ({ id }: Id) => {
  const player = clients.players.findIndex((value) => value.id === id);

  if (player) {
    clients.players.splice(player, 1);
    console.log(`${id}: desconectado.`);
  }
} 

export { removePlayer }