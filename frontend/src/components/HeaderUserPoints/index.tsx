import styles from './styles.module.css';

interface HeaderUserPointsProps {
  totalPoints: number,
  challengeCorrent: number,
  challengeIncorrect: number
}

export function HeaderUserPoints({ challengeCorrent, challengeIncorrect, totalPoints }: HeaderUserPointsProps) {
  return (
    <div className={styles.content}>
      <p>Pontos: {totalPoints}</p>

      <p>Respostas Corretas: {challengeCorrent}</p>

      <p>Respostas Erradas: {challengeIncorrect}</p>

    </div>
  )
}