import { CardFetch } from "./fetch/cardFetch";

const controller = {
  useFetch: CardFetch
}

export function useCardController() {
  return {
    cardController: () => controller.useFetch()
  }
}