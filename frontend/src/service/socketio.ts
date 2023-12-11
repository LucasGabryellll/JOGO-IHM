import { io } from 'socket.io-client';

const serverHTTP = "http://192.168.99.28:5000";

const socket = io(serverHTTP, {
  transports: ['websocket']
});

export { socket };