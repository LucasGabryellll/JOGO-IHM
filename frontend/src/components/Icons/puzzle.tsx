import { HTMLAttributes } from 'react';

import puzzleIcon from "../../assets/icon.svg";

interface IconPuzzleProps extends HTMLAttributes<HTMLInputElement>{
  height?: number
}

export function IconPuzzle(props: IconPuzzleProps) {
  return (
    <img
      src={puzzleIcon}
      alt="puzzle-icon"
      height={props.height}
      style={{ position: 'absolute', zIndex: 1, ...props.style }}
    />
  )
}