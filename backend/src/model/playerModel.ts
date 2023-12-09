interface Id {
  id: string;
}

interface Player extends Id{
  name: string
  status: 'lobby' |'spector' | 'gamming'
}

export { Id, Player }