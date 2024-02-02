export type Question = {
  id: string,
  question: string,
  original_word: string,
  difficulty: number,
  points: number
}

export interface WordProps {
  id: string;
  name: string
}

export interface ChallengeResponse {
  player: string;
  question: Question,
  challengeWords: WordProps[]
}