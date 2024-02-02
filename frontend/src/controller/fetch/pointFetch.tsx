import { PointsState } from "../state/pointsState";

type AlterPoints = {
  type: "add" | "sub",
  point: number
}

export function PointFetch() {
  const state = PointsState();

  function alterCountPoints({ point, type }: AlterPoints) {
    switch (type) {
      case "add":
        state.setPoints(state => state + point);

        break;
      case "sub":
        state.setPoints(state => state - point);

        break;
    }
  }

  function alterCountChallengeCorrect() {
    state.setCountChallengeCorrect(state => state + 1);
  }

  function alterCountChallengeIncorrect() {
    state.setCountChallengeIncorrect(state => state + 1);
  }

  const playerPoints = {
    correct: state.countChallengeCorrect,
    totalPoints: state.points,
    incorrect: state.countChallengeIncorrect
  }

  return {
    playerPoints,

    alterCountChallengeCorrect,
    alterCountPoints,
    alterCountChallengeIncorrect
  }
}