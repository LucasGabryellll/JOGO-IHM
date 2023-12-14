interface Id {
  id: string;
}

interface Player extends Id {
  name: string
}

const players: Player[] = []; 

export { Id, Player };

export { players };