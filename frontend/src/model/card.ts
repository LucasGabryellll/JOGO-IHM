export interface CardProps {
  id: string;
  type: 'moveForward' | 'moveBackward' | 'answerQuestion';
  value?: number;
  question?: string; 
}
