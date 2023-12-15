import { ChatFetch } from "./fetch/chatFetch";

const controller = {
  useFetch: ChatFetch
}

export function useMessageController() {
  return {
    chatController: () => controller.useFetch()
  }
}