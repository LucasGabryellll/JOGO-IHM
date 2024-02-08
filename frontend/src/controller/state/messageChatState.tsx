import { useState } from "react";
import { Message } from "../../model/messageModal";

export function MessagesChatState() {
  const [message, setMessage] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<boolean>(false);

  return {
    message, setMessage,

    newMessage, setNewMessage
  }
}