import { MdLogout } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useNavigate  } from "react-router-dom";

interface OptionsButtonLobbyProps {
  handleOpenRoom: () => void
}

export const OptionsButtonLobby = ({ handleOpenRoom }: OptionsButtonLobbyProps) => {
  const navigation = useNavigate();

  const options = [
    { id: 1, description: "ENTRAR", Icon: MdLogout, onPress: handleOpenRoom  },
    { id: 2, description: "CRIAR SALA", Icon: HiOutlinePlusSm, onPress: () => navigation("/criar-sala") },
    { id: 3, description: "VOLTAR", Icon: IoReturnDownBackSharp, onPress: () => navigation("/") },
  ]; 

  return options;
}