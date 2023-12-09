import { MdLogout } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useNavigate  } from "react-router-dom";

export const OptionsButtonLobby = () => {
  const navigation = useNavigate();

  const options = [
    { id: 1, description: "ENTRAR", Icon: MdLogout, onPress: () => navigation("/partida") },
    { id: 2, description: "CRIAR SALA", Icon: HiOutlinePlusSm, onPress: () => navigation("/criar-sala") },
    { id: 3, description: "VOLTAR", Icon: IoReturnDownBackSharp, onPress: () => navigation("/") },
  ]; 

  return options;
}