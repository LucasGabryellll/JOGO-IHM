import { LobbyFetch } from "./fetch/lobbyFetch";

const controller = {
  useFetch: LobbyFetch
}

export function useLobbyController() {
  return {
    lobbyController: () => controller.useFetch()
  }
}