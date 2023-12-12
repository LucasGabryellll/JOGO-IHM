import { ReactNode } from "react";

import styles from "./styles.module.css";

interface ButtonOptionsProps {
  children?: ReactNode
}

export function ButtonOptionRoot({ children }: ButtonOptionsProps) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}