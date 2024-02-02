import { useQuestionController } from "../../controller/useQuesitonController";
import { Config, DragWords } from "../DragWords";
import { Word } from "../Word";

import styles from "./styles.module.css";

const ConfigDragOrganized: Config = {
  id: 'dragOrganized',
  direction: "horizontal"
}

const ConfigDragInitial: Config = {
  id: 'dragInitial',
  direction: "horizontal"
}

export function Question() {
  const { questionFetch } = useQuestionController();
  const { question, words, wordsOrganized, onDragWordInitial, onDragWordOrganized } = questionFetch();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{question?.question.toUpperCase()}</h1>

      <div className={styles['content-organized']}>
        <p>SOLTE AQUI:</p>

        <DragWords
          config={ConfigDragOrganized}
          onHandle={onDragWordOrganized}
        >
          {wordsOrganized?.map((value, index) => (
            <Word
              key={`word_organized-${value.id}`}
              index={index}
              word={value}
            />
          ))}
        </DragWords>

      </div>

      <DragWords
        config={ConfigDragInitial}
        onHandle={onDragWordInitial}
      >
        {words?.map((value, index) => (
          <Word
            key={`word_mistured-${value.id}`}
            index={index}
            word={value}
          />
        ))}
      </DragWords>
    </div>
  )
}