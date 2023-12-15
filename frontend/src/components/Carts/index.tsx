import { Card } from './Card';
import styles from './styles.module.css';

interface CartsProps {
  namePlayer: string;
  isOpen: boolean
}

export function Carts({ namePlayer, isOpen }: CartsProps) {

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles['description-player']}>{namePlayer}</div>
      <div className={styles.content}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}