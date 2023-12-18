import { ReactNode } from "react";
import { positionMapTiled } from "../../model/pointMap";

import { FaStar } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";

import styles from "./styles.module.css";

interface MapProps {
  children: ReactNode
}

export function Map({ children }: MapProps) {
  const backgroundColor = (type: 'normal' | 'bonus' | 'quiz') => {
    switch (type) {
      case 'bonus':
        return '#00A510';
      case 'normal':
        return ''
      case 'quiz':
        return '#FF5C00'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles['content-map']}>
        <div className={styles['tiled-star-end']}
          style={{ top: 300, left: 0 }}
        >
          INICIO
        </div>
        
        {children}

        {positionMapTiled.map((value, index) => (
          <>
            <div
              className={styles['box-zone']}
              style={{
                top: value.top,
                left: value.left,
                backgroundColor: backgroundColor(value.type)
              }}
            >
              {value.type === "normal" && index + 1}

              {
                value.type === "bonus" &&
                <FaStar />
              }

              {value.type === "quiz" &&
                <>
                  <IoMdHelp />
                  <p style={{ fontSize: 14 }}>QUIZ</p>
                </>
              }
            </div>
          </>
        ))}
        <div className={styles['tiled-star-end']}
          style={{ top: 350, left: 800 }}
        >
          FIM
        </div>
      </div>
    </div>
  );
}