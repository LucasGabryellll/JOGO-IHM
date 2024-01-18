import playerMan from "../../assets/players/man.png";
import playerWoman from "../../assets/players/woman.png";
import { positionMapTiled } from "../../model/pointMap";
import { socket } from "../../service/socketio";

import styles from "./styles.module.css";

interface PlayerProps {
  status: boolean | undefined,
  playerStatus: {
    id: string;
    pos: number
  };
  type: 'man' | 'woman',
  name: string;
}

export function Player({ playerStatus, type, status, name }: PlayerProps) {
  const positions = positionMapTiled[playerStatus.pos];
  const positionInicial = positionMapTiled[0];

  const player = playerStatus.id === socket.id ? true : false;

  return (
    <div
      className={styles.container}
      style={{
        top: status ? positions.top + 5 : positionInicial.top + 60,
        left: status ? positions.left + 5 : positionInicial.left - 20,
      }}
    >
      <div
        className={`${styles['content-info']}`}
        style={{ backgroundColor: player ? '#00EBE6' :  '#FF0F00' }}
      >
        <div
          className={player ? styles.name : styles['name-oponent']}
        >
          {player ? name : 'OPONENTE'}
        </div>

        <img
          src={type === "man" ? playerMan : playerWoman}
          alt="player-icon"
          style={{ objectFit: 'contain', width: 40 }}
        />
      </div>
    </div>
  );
}