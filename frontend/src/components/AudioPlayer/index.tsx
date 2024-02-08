import { RefObject } from 'react';

import music_game from "../../assets/audio/music_back.mp3";

interface AudioPlayerProps {
  audioRef: RefObject<HTMLAudioElement>
}

export function AudioPlayer({ audioRef }: AudioPlayerProps) {

  return (
    <div>
      <audio ref={audioRef} autoPlay={true} loop>
        <source src={music_game} type="audio/mp3" />
        Seu navegador não suporta a tag de áudio.
      </audio>
    </div>
  );
}