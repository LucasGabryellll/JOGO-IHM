import { ToastNotifyConfig } from "./components/ToastyNotifyConfig";
import { GameProvider } from "./context/GameContext";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <GameProvider>
      <AppRoutes />

      <ToastNotifyConfig />
    </GameProvider>
  )
}