import { ListenBonusFetch } from "./fetch/listenBonusFetch"

const controller = {
  useFetch: ListenBonusFetch
}

export function useListenGetBonus() {
  return {
    listenBonusFetch: () => controller.useFetch()
  }
}