interface Message {
  room: string;
  text: string;
  createdAt: Date;
  username: string
}

const messages: Message[] = [];

export { Message };
export { messages };