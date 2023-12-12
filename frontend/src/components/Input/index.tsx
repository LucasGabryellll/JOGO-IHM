import { InputHTMLAttributes } from "react";

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
}

export function Input(props: InputProps) {
  const { description, id, ...rest } = props;

  return (
    <div className={styles.container}>
      {description && <label htmlFor={id}>{description}</label>}

      <input
        className={styles['input-format']}
        type="text"
        {...rest}
      />
    </div>
  )
}