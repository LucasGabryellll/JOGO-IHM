interface Card {
  id: string;
  type: 'moveForward' | 'moveBackward' | 'answerQuestion';
  value: number;
  question?: string; 
}

interface Room {
  id: string;
}

export interface PlayerAnswerResponse {
  card: Card,
  room: Room
}