export interface Card {
  id: string;
  type: 'moveForward' | 'moveBackward' | 'answerQuestion';
  value?: number;
  question?: string; 
}
