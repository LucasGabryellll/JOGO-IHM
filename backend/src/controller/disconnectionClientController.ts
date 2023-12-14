import { players, Id } from "../model";

const removePlayer = ({ id }: Id) => {
 
  const player = players.findIndex((value) => value.id === id);
  if (player) {
    players.splice(player, 1);
    console.log(`${id}: desconectado.`);
  }
} 

export { removePlayer }