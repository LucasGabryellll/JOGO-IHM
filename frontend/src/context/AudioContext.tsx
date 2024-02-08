import { ReactNode, RefObject, createContext, useRef, useState } from 'react';

interface AudioContextProps {
  isPlaying: boolean;
  togglePlay: () => void;
  audioRef: RefObject<HTMLAudioElement>
}

const AudioContext = createContext<AudioContextProps>({
  isPlaying: false,
  togglePlay: () => {},
  audioRef: { current: null },
});

interface AudioProvicerProps {
  children: ReactNode
}

function AudioProvider({ children }: AudioProvicerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, audioRef }}>
      {children}
    </AudioContext.Provider>
  )
}

export {
  AudioProvider, 
  AudioContext
}