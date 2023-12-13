import { ReactNode } from 'react';
import styles from './styles.module.css';

interface ContainerInputProps {
  description?: string;
  children?: ReactNode
}

export function ContainerInput({ description, children }: ContainerInputProps) {

  return (
    <div className={styles.container}>
      <p>{description}</p>

      {children}
    </div>
  )
}