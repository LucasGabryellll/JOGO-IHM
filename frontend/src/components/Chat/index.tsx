import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { RiSendPlane2Fill } from "react-icons/ri";

import { socket } from "../../service/socketio";

import { useMessageController } from "../../controller/useMessageController";

import styles from "./styles.module.css";

export function Chat() {
  const { chatController } = useMessageController();
  const fetch = chatController()

  const { handleSubmit, message, onSendMenssage, register, setNewMessage, newMessage } = fetch;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const alterStateOpenChat = () => {
    setIsOpen(state => !state);

    setNewMessage(false);
  }

  return (
    <div className={styles.container} style={{ height: isOpen ? 300 : 80 }}>
      {newMessage &&
        <p className={styles['new-message']}>NOVA MENSAGEM</p>
      }

      <button
        className={styles['visible-chat']}
        onClick={alterStateOpenChat}
      >

        {isOpen &&
          <IoIosArrowDown />
        }

        {!isOpen &&
          <IoIosArrowUp />
        }
      </button>

      <p className={styles['text-header-chat']}>CHAT ONLINE</p>

      <div className={styles.messages}>
        {/** Mensagens recebidas do Server da sala que o usuário está */}
        {message.map((messages, key) => (
          <div className={styles[`${messages.userId === socket.id ? 'message-send' : 'message-receive'}`]}>
            <p
              key={`messages-receive-${key}`}
            >
              {messages.message}
            </p>
          </div>
        ))}
      </div>

      <div className={styles['content-chat']}>
        <form className={styles['content-input']} onSubmit={handleSubmit(onSendMenssage)}>
          <input
            className={styles.input}
            placeholder="Digite uma mensagem..."
            {...register("message")}
          />

          <button className={styles.btn} type="submit">
            <RiSendPlane2Fill className={styles.icon} />
          </button>
        </form>
      </div>
    </div>
  )
}