import { useContext, useEffect } from "react";

import { MessagesChatState } from "../state/messageChatState";
import { GameContext } from "../../context/GameContext";
import { MessageSchema, messageSchema } from "../../model/yupShemaValidade/messageChat";
import { socket } from "../../service/socketio";
import { useSchemaValidade } from "../../hooks/useSchemaValidade";

export function ChatFetch(){
  const { message, setMessage, newMessage, setNewMessage } = MessagesChatState();
  const { register, handleSubmit, resetField } = useSchemaValidade<MessageSchema>({ schemaYup: messageSchema });

  const { room, username} = useContext(GameContext);

  function onSendMenssage(date: MessageSchema) {
    socket.emit('send_message', {
      room: room,
      message: date.message,
      createdAt: new Date(),
      username: username,
      userId: socket.id
    });

    resetField("message");
  }

  //@ts-ignore
  useEffect(() => {
    socket.on('receive_message', data => {
      setNewMessage(true);
      setMessage((state => [...state, data]));
    });

    return () => socket.off('receive_message');
  }, [socket]);

  return {
    message,
    
    onSendMenssage,
    register, 
    handleSubmit,

    newMessage,
    setNewMessage
  }
}