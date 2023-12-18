import { Player } from "..";

interface PlayersProps {
  positionPlayers: {
    posPlayer1: number,
    posPlayer2: number
  }

  statusGame: boolean | undefined,
}

export function Players({ positionPlayers, statusGame }: PlayersProps) {

  return (
    <>
      <Player type="man" pos={positionPlayers.posPlayer1} status={statusGame} />
      <Player type="woman" pos={positionPlayers.posPlayer2} status={statusGame} />
    </>
  )
}