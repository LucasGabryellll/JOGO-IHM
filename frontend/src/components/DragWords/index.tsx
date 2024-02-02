import { ReactNode } from "react";

import { Droppable, DroppableProvided } from "@hello-pangea/dnd";

import styles from "./styles.module.css";

type Direction = 'vertical' | 'horizontal';

export type Config = {
  id: string;
  direction: Direction
}

interface DragWordsProps {
  config: Config;
  children: ReactNode;
}

export function DragWords({ config, children }: DragWordsProps) {

  return (
    <section
      className={styles.container}
    >
      <Droppable
        droppableId={config.id}
        type="list"
        direction={config.direction}
      >
        {(props: DroppableProvided) => (
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
    </section>
  );
}