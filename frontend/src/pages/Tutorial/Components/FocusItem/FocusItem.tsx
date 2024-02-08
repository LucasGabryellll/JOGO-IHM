import { help_items } from "../../items";
import styles from "./styles.module.css";

interface FocusItemProps {
  focus: number
}

export function FocusItem({ focus }: FocusItemProps) {
  const select = help_items[focus];

  return (
    <div
      key={`item-focus-help-${focus}`}
      className={styles['content-help']}
    >
      <p className={styles.title}>
        {select.title}
      </p>

      <p className={styles.description}>
        {select.description}
      </p>

      <img
        src={select.img}
        alt="imagem"
        height={220}
        width={'100%'}
      />
    </div>
  );
}