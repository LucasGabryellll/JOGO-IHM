import { ReactNode } from "react";

import styles from "./styles.module.css";

interface BackgroundProps {
  children: ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className={styles['container-div']}>
      <div className={styles['content-square']}>
        <div className={styles['content-img']}>
          {children}
        </div>
      </div>
    </div>
  )
}