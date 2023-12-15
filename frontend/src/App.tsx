import { GameProvider } from "./context/GameContext";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <GameProvider>
      <AppRoutes />
    </GameProvider>
  )
}