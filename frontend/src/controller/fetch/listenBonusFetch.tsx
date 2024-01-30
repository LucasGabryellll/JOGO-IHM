import { useEffect } from "react";
import { BonusState } from "../../controller/state/bonusState";
import { socket } from "../../service/socketio";

export function ListenBonusFetch() {

  const { bonus, setBonus } = BonusState();

  function listenGameOver() {
    socket.on("get_bonus", state => {
      setBonus(state);

      setTimeout(() => {
        setBonus(undefined)
      }, 6000)
    });
  }

  useEffect(() => {
    listenGameOver();
    
  }, [socket]);

  return {
    bonus,
    setBonus
  }
}
