import styles from './styles.module.css';

export function HeaderUserPoints() {
  return (
    <div className={styles.content}>
      <p>Pontos: 0</p>

      <p>Respostas Corretas: 0</p>

      <p>Respostas Erradas: 0</p>

    </div>
  )
}