import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ContentGradientProps {
  description?: string;
  children?: ReactNode
}

export function ContentGradient({ description, children }: ContentGradientProps) {
  return (
    <div className={styles.container}>
      {description &&
        <p className={styles.description}>{description}</p>
      }

      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}