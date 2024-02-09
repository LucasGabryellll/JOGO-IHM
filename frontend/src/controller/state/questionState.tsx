import { useState } from "react";
import { Question, WordProps } from "../../model/questions";

export type ConfirmProps = {
  isSendReponse: boolean;
  isCorrect: boolean | null
}

export function QuestionState() {
  const [question, setQuestion] = useState<Question>();

  const [words, setWords] = useState<WordProps[]>();
  const [wordsOrganized, setWordsOrganized] = useState<WordProps[]>();

  const [confirmReponse, setConfirmResponse] = useState<ConfirmProps | undefined>({
    isSendReponse: false,
    isCorrect: null,
  });

  return {
    question,
    words,
    wordsOrganized,


    setWords,
    setQuestion,
    setWordsOrganized,

    confirmReponse, setConfirmResponse
  }
}