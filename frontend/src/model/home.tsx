import { FaPlay } from "react-icons/fa6";
import { MdHelp } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const OptionsButtonHome = () => {
  const navigation = useNavigate();

  const options = [
    { id: 1, description: "JOGAR", Icon: FaPlay, onPress: () => navigation("/entrar-em-partida") },
    { id: 2, description: "TUTORIAL", Icon: MdHelp, onPress: () => navigation("/tutorial") },
    { id: 3, description: "CRÉDITOS", Icon: FaStar, onPress: () => navigation("/creditos") },
  ];

  return options;
}