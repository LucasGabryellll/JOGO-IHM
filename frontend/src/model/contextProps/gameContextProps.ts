export interface GameContextProps {
  room: string,
  username: string,
  onSelectRoom: (value: string) => void,
  onSelectUsername: (value: string) => void
}