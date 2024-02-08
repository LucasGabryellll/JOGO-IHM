import { ToastNotifyConfig } from "./components/ToastyNotifyConfig";
import { AudioProvider } from "./context/AudioContext";
import { GameProvider } from "./context/GameContext";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <GameProvider>
      <AudioProvider>
        <AppRoutes />

        <ToastNotifyConfig />
      </AudioProvider>
    </GameProvider>
  )
}