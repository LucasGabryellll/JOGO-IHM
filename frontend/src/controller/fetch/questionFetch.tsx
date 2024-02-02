import { useEffect } from "react";
import { QuestionState, WordProps } from "../state/questionState";

export function QuestionFetch() {
  const { question, words, wordsOrganized, setWordsOrganized, setQuestion, setWords } = QuestionState();

  const data = [
    { id: '1', name: 'private', },
    { id: '3', name: 'static' },
    { id: '2', name: 'double' },
    { id: '5', name: '(' },
    { id: '8', name: '}' },
    { id: '4', name: 'calcular' },
    { id: '6', name: ')' },
    { id: '7', name: '{' },
  ];

  const dataQuestion = {
    id: '1',
    question: 'Organize a função',
    original_word: 'public static double',
    difficulty: 1,
    points: 100
  }

  function reorder<T>(list: T[] | undefined, startIndex: number, endIndex: number) {
    if (list) {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    }

    return;
  }

  function onDragWordOrganized(result: any) {
    if (!result.destination) {
      return;
    }

    const items = reorder<WordProps>(wordsOrganized, result.source.index, result.destination.index);

    setWordsOrganized(items);
  }

  function onDragWordInitial(result: any) {
    if (!result.destination) {
      return;
    }

    const items = reorder<WordProps>(words, result.source.index, result.destination.index);

    setWords(items);
  }

  useEffect(() => {
    setWords(data);

    setQuestion(dataQuestion)
  }, []);

  return {
    words,
    question,
    wordsOrganized,

    reorder,

    onDragWordOrganized,
    onDragWordInitial
  }
}