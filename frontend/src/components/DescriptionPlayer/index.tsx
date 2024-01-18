import styles from "./styles.module.css";

interface DescriptionPlayerProps {
  namePlayer: string;
}

export function DescriptionPlayer({ namePlayer }: DescriptionPlayerProps) {
  return (
    <div className={styles['description-player']}>
      {namePlayer}
    </div>
  );
}