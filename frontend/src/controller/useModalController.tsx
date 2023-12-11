import { ModalState } from "./state/modalState";

export function useModalController() {
  const state = ModalState()

  return {
    state
  }
}