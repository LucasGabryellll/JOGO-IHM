import sound from "../../../assets/sound_svgrepo.com.svg";
import help from "../../../assets/help_svgrepo.com.svg";
import close from "../../../assets/close_svgrepo.com.svg";

import styles from "./styles.module.css";

interface IconOptionProps {
  action: () => void;
  type: 'sound' | 'help' | 'close'
}

export function IconOption({ type, action }: IconOptionProps) {
  const icon = type === 'close' ? close : type === 'help' ? help : sound;

  return (
    <img
      src={icon}
      onClick={action}
      key={icon}
      alt="icon-option"
      className={styles.icon}
      style={{ background: type === 'close' ? '#FF0F00' : type === 'help' ? '#FF5C00': '#004E60' }}
    />
  )
}