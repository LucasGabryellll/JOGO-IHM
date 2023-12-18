export interface StatusGamming {
  focus: string,
  players: {
    playerOne: {
      id: string;
      pos: number;
    };
    playerTwo: {
      id: string;
      pos: number;
    };
  }
  status: boolean
}