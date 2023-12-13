import { RiSendPlane2Fill } from "react-icons/ri";

import { useSchemaValidade } from "../../hooks/useSchemaValidade";
import { MessageSchema, messageSchema } from "../../model/yupShemaValidade/messageChat";
import { socket } from "../../service/socketio";

import { useEffect } from "react";
import { MessagesChatState } from "../../controller/state/messageChatState";

import styles from "./styles.module.css";

export function Chat() {
  const { register, handleSubmit, resetField } = useSchemaValidade<MessageSchema>({ schemaYup: messageSchema });

  const { message, setMessage } = MessagesChatState();

  function onSendMenssage(date: MessageSchema) {
    socket.emit('send_message', date.message);

    resetField("message");
  }

  //@ts-ignore
  useEffect(() => {
    socket.on('receive_message', data => {
      setMessage((state => [...state, data]));
    });

    return () => socket.off('receive_message');
  }, [socket]);

  return (
    <div className={styles.container}>
      <p className={styles['text-header-chat']}>CHAT ONLINE</p>

      <div className={styles.messages}>
        {/** Mensagens recebidas do Server da sala que o usuário está */}
        {message.map((messages, key) => (
          <div className={styles[`${messages.userSend === socket.id ? 'message-send': 'message-receive'}`]}>
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