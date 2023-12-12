import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
  description: string;
  children?: ReactNode
}

export function ButtonRoot({ description, children, onPress }: ButtonRootProps) {
  return (
    <button
      className={styles['content-button']}
      onClick={onPress}
    >
      {children}
      <p className={styles['description-button']}>{description}</p>
    </button>
  )
}