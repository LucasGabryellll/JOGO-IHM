import { usePlayerWinController } from "../../controller/usePlayerWinController";
import { useNavigation } from "../../hooks/useNavigation";
import { socket } from "../../service/socketio";

export function GameOver() {

  const { playerWinFetch } = usePlayerWinController();
  const { playerWin } = playerWinFetch();

  const { navigation } = useNavigation();

  function navigationToHome() {
    setTimeout(() => {
      navigation('/home')
    }, 5000);
  }

  function sendPlayerWind() {
    if (playerWin?.player === socket.id) {
      alert("Parabéns você venceu.");
      navigationToHome()
      
    } else {
      alert("Infelizmente você perdeu, fica para próxima.");
      navigationToHome()
    }
  }

  return (
    playerWin ? sendPlayerWind() : <></>
  )
}