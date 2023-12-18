import cardReturn from '../../../assets/card/return.svg';
import cardAvance from '../../../assets/card/avance.svg';

import { CardProps } from '../../../model/card';

import styles from "./styles.module.css";

interface FrontCardProps {
  typeCard: CardProps | undefined
}

export function FrontCard({ typeCard }: FrontCardProps) {

  return (
    <div className={styles.container}>
      <p className={typeCard?.type === "moveBackward" ? styles['card-return'] : styles['card-avance']}>
        {typeCard?.type === "moveBackward" ? "RETORNE" : "AVANCE"}
      </p>

      <img
        src={typeCard?.type === "moveBackward" ? cardReturn : cardAvance}
        className={styles.img}
        alt="card-type"
      />

      <div className={styles['value-card']}>
        {typeCard?.value} CASAS
      </div>
    </div>
  )
}