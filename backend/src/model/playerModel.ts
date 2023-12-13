interface Id {
  id: string;
}

interface Player extends Id {
  name: string,
  status: 'lobby' | 'spector' | 'gamming'
}

const players: Player[] = []; 

export { Id, Player };

export { players };