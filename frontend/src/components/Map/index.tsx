import { ReactNode } from "react";
import { positionMapTiled } from "../../model/pointMap";

import { FaStar } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";

import styles from "./styles.module.css";

interface MapProps {
  children: ReactNode
}

export function Map({ children }: MapProps) {
  const backgroundColor = (type: 'normal' | 'quiz' | 'bonus' | 'final' | 'initial') => {
    switch (type) {
      case 'bonus':
        return '#00A510';
      case 'normal':
        return ''
      case 'quiz':
        return '#FF5C00';
      case 'initial':
        return '#096A80'
      case 'final':
        return '#096A80'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles['content-map']}>
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
              {value.type === "initial" &&
                <p className={styles['text-star-end']}>
                  INICIO
                </p>
              }

              {value.type === "normal" && index}

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

              {value.type === "final" &&
                <p className={styles['text-star-end']}>
                  FIM
                </p>
              }
            </div>
          </>
        ))}
      </div>
    </div>
  );
}