import { useState } from "react";

export function PointsState() {
  const [points, setPoints] = useState<number>(0);
  const [countChallengeCorrect, setCountChallengeCorrect] = useState<number>(0);
  const [countChallengeIncorrect, setCountChallengeIncorrect] = useState<number>(0);

  return {
    points, setPoints,

    countChallengeCorrect, setCountChallengeCorrect,

    countChallengeIncorrect, setCountChallengeIncorrect
  }
}