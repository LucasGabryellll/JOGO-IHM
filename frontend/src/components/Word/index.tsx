import { Draggable } from "@hello-pangea/dnd";

import styles from "./styles.module.css";

interface WordProps {
  word: {
    id: string;
    name: string
  },
  index: number
}

export function Word({ word, index }: WordProps) {
  return (
    <Draggable
      draggableId={word.id}
      index={index}
    >
      {(props) => (
        <div
          {...props.dragHandleProps}
          {...props.draggableProps}
          ref={props.innerRef}
          className={styles.container}
        >
          <p>{word.name}</p>
        </div>
      )}
    </Draggable>
  )
}