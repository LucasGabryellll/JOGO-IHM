import { useEffect } from "react";
import { socket } from "../service/socketio";

export function useConnectSocket() {
  useEffect(() => {
    socket.connect()
  }, []);
}