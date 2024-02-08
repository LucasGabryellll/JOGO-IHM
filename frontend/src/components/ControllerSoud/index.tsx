import { useContext } from "react";

import { AudioContext } from "../../context/AudioContext";
import { ButtonOptions } from "..";

import styles from "./styles.module.css";

export function ControllerSoud() {
  const { isPlaying, togglePlay } = useContext(AudioContext);

  function Sound() {

    return isPlaying ? (
      <ButtonOptions.Icon type="sound" action={togglePlay} />
    ) : (
      <div className={styles.container}>
        <p className={styles.content}>/</p>

        <ButtonOptions.Icon type="sound" action={togglePlay} />
      </div>
    )
  }

  return (
    <Sound />
  );
}