import { GammingFetch } from "./fetch/gammingFetch";

const controller = {
  useFetch: GammingFetch
}

export function useGammingController(){
  return {
    gammingFetch: () => controller.useFetch()
  }
}