import { PlayerWinFetch } from "./fetch/playerWinFetch";

const controller = {
  useFetch: PlayerWinFetch
}

export function usePlayerWinController() {
  return {
    playerWinFetch: () => controller.useFetch()
  }
}