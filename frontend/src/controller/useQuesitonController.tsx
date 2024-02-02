import { QuestionFetch } from "./fetch/questionFetch"

const controller = {
  useFetch: QuestionFetch
}

export function useQuestionController() {
  return {
    questionFetch: () => controller.useFetch()
  }
}