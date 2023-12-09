import { Player } from "./playerModel"

interface Client {
  players: Player[]
}

const clients: Client = {
  players: []
}

export { clients }