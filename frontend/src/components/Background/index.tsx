import { ReactNode } from "react";

import styles from "./styles.module.css";
import { Icon } from "../Icons";

interface BackgroundProps {
  children: ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className={styles['container-div']}>
      <Icon.Puzzle height={140}/>
      <Icon.Puzzle height={60} style={{ bottom: 5, left: '1.2%' }}/>
      <Icon.Puzzle height={120} style={{ bottom: 5, right: '1.5%', rotate: '180deg'  }}/>

      <div className={styles['content-square']}>
        <div className={styles['content-img']}>
          {children}
        </div>
      </div>
    </div>
  )
}