import { useEffect } from "react";
import { QuestionState } from "../state/questionState";
import { DropResult } from "@hello-pangea/dnd";
import { ChallengeResponse, WordProps } from "../../model/questions";
import { socket } from "../../service/socketio";
import { GameState } from "../state/gammingState";
import { usePointController } from "../usePointController";

export function QuestionFetch() {
  const { playerChallenge, setPlayerChallenge } = GameState();
  const { question, words, wordsOrganized, setWordsOrganized, setQuestion, setWords } = QuestionState();

  const { pointFetch } = usePointController();
  const pointController = pointFetch();

  const { playerPoints } = pointController;

  function clearChallenge() {
    setQuestion(undefined);
    setWords(undefined);
    setWordsOrganized(undefined);

    setPlayerChallenge("");
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

  function removedItem<T>(list: T[] | undefined, startIndex: number) {
    if (list) {
      const result = Array.from(list);
      result.splice(startIndex, 1);

      return result;
    }

    return;
  }

  function alterList(sourceId: string, destinationId: string): boolean {
    if (sourceId === destinationId) {
      return false;

    } else {
      return true;
    }
  }

  function onDragWord(result: DropResult) {
    if (!result.destination) {
      return;
    }

    let isAlterList: boolean;

    switch (result.destination.droppableId) {
      case 'dragOrganized':
        isAlterList = alterList(result.source.droppableId, result.destination.droppableId);

        if (!isAlterList) {

          const items = reorder<WordProps>(wordsOrganized, result.source.index, result.destination.index);

          setWordsOrganized(items);

        } else {

          const newList = removedItem<WordProps>(words, result.source.index);
          const item = words?.[result.source.index];

          const data = wordsOrganized;

          //@ts-ignore
          data?.push(item);

          setWords(newList);
          setWordsOrganized(data);
        }

        break;

      case 'dragInitial':
        isAlterList = alterList(result.source.droppableId, result.destination.droppableId);

        if (!isAlterList) {
          const items = reorder<WordProps>(words, result.source.index, result.destination.index);

          setWords(items);

        } else {

          const newList = removedItem<WordProps>(wordsOrganized, result.source.index);
          const item = wordsOrganized?.[result.source.index];

          const data = words;
          //@ts-ignore
          data?.push(item);

          setWordsOrganized(newList);
          setWords(data);
        }

        break;
    }

  }


  function handleTimeOver(room: string) {

    pointController.alterCountChallengeIncorrect();
    pointController.alterCountPoints({ type: "sub", point: question!.points });

    clearChallenge();

    socket.emit("response_challenge", room);
  }

  function sendResponse(room: string) {
    let response = '';

    wordsOrganized?.map((value) => {
      response = response + value.name
    });
    const gabarit = question?.original_word.replace(/\s/g, '');

    const isCorrect = response === gabarit ? true : false;

    if (isCorrect) {
      pointController.alterCountChallengeCorrect();
      pointController.alterCountPoints({ type: "add", point: question!.points });

      clearChallenge();
      socket.emit("response_challenge", room);

    } else {
      pointController.alterCountChallengeIncorrect();
      pointController.alterCountPoints({ type: "sub", point: question!.points });

      clearChallenge();
      socket.emit("response_challenge", room);

    }

  }

  useEffect(() => {
    socket.on('open_challenge', (data: ChallengeResponse) => {
      setQuestion(data.question);
      setWords(data.challengeWords);
      setWordsOrganized([]);

      setPlayerChallenge(data.player);
    });

  }, [socket]);

  const handleResponse = {
    sendResponse,
    handleTimeOver
  }

  return {
    words,
    question,
    wordsOrganized,

    onDragWord,

    playerChallenge, setPlayerChallenge,

    handleResponse,
    playerPoints
  }
}