import { InputHTMLAttributes } from "react";

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  description?: string
}

export function Input(props: InputProps) {
  return (
    <div className={styles.container}>
      <p>{props?.description}</p>
      <input
      className={styles['input-format']}
        {...props}
      />
    </div>
  )
}