import { useState } from "react";
import { Message } from "../../model/messageModal";

export function MessagesChatState() {
  const [message, setMessage] = useState<Message[]>([]);

  return {
    message,
    setMessage
  }
}