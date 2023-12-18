interface StatusGamming {
  playerWin: string,
  status: boolean;
  roomId: string,
  players: {
    playerOne: {
      id: string;
      pos: number,
    };
    
    playerTwo: {
      id: string;
      pos: number
    }
  }
  playerInFocus: string;
}

const statusGamming: StatusGamming[] = [];

export { statusGamming };