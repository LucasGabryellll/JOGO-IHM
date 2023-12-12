import { RiSendPlane2Fill } from "react-icons/ri";

import styles from "./styles.module.css";

export function Chat() {
  return (
    <div className={styles.container}>
      <p className={styles['text-header-chat']}>CHAT ONLINE</p>


      <div className={styles.messages}>
        {/** Mensagens recebidas do Server da sala que o usuário está */}

      </div>

      <div className={styles['content-chat']}>
        <div className={styles['content-input']}>
          <input
            value=""
            className={styles.input}
            placeholder="Digite uma mensagem..."
          />

          <button className={styles.btn}>
            <RiSendPlane2Fill className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  )
}