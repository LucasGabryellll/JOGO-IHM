interface Message {
  room: string;
  message: string;
  createdAt: Date;
  username: string;
  userId: string
}

const messages: Message[] = [];

export { Message };
export { messages };