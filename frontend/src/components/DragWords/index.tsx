import { ReactNode } from "react";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import styles from "./styles.module.css";

type Direction = 'vertical' | 'horizontal';

export type Config = {
  id: string;
  direction: Direction
}

interface DragWordsProps {
  config: Config;
  onHandle: (result: any) => void;
  children: ReactNode;
}

export function DragWords({ config, children, onHandle }: DragWordsProps) {

  return (
    <section
      className={styles.container}
    >
      <DragDropContext
        onDragEnd={onHandle}
      >
        <Droppable
          droppableId={config.id}
          type="list"
          direction={config.direction}
        >
          {(props) => (
            <article
              ref={props.innerRef}
              {...props.droppableProps}
              className={styles['content-items']}
            >
              {children}

              {props.placeholder}
            </article>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}