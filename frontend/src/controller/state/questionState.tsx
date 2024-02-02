import { useState } from "react";
import { Question, WordProps } from "../../model/questions";

export function QuestionState() {
  const [question, setQuestion] = useState<Question>();

  const [words, setWords] = useState<WordProps[]>();
  const [wordsOrganized, setWordsOrganized] = useState<WordProps[]>();

  return {
    question,
    words,
    wordsOrganized,


    setWords,
    setQuestion,
    setWordsOrganized
  }
}