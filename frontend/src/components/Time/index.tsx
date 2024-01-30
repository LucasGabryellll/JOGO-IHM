import { useEffect, useState } from 'react';

import { NotificationType, toasty } from '../Toasty';

import styles from "./styles.module.css";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 60 * 2 // 2 minutos;

interface TimeProps {
  onTimeOver: () => void;
}

export function Time({ onTimeOver }: TimeProps) {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    if (secondsAmount === 0) {
      toasty({ message: 'Perdeu a vez, Tempo esgotado.', type: NotificationType.INFO });
      onTimeOver();
      return;
    }

    setTimeout(() => {
      setSecondsAmount(state => state - 1)
    }, 1000);

  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className={styles.container}>
      <p className={styles.text}>{String(minutes).padStart(2, '0')}</p>
      <span>:</span>
      <p className={styles.text}>{String(seconds).padStart(2, '0')}</p>
    </div>
  );
}