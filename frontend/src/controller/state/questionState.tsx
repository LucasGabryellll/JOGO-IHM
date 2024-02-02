import { useState } from "react";
import { Question } from "../../model/questions";

export interface WordProps {
  id: string;
  name: string
}

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