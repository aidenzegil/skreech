"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import s from "./page.module.scss";

export default function Home() {
  const [panikClicks, setPanikClicks] = useState<number>(0);

  const ref = useRef(null);

  const buttonText = (() => {
    switch (panikClicks) {
      case 0:
        return "Enter the secret garden";
      case 1:
        return "Stop";
      case 2:
        return "STOP";
      case 3:
        return "Please stop";
      case 4:
        return "PLEASE";
      case 5:
        return "OMG STOP";
      case 6:
        return "OMG PLEASE STOP";
      case 7:
        return "PLEAASEEE STAAAAAPPPP";
      case 8:
        return "😑";
      case 9:
        return "OMFG WHY PLEASE STOP";
      default:
        return "This button has not and will never do anything";
    }
  })();
  const audioElement = document.getElementById("scream") as HTMLAudioElement;

  const handleClick = () => {
    (document.getElementById("scream") as HTMLAudioElement).play();
    setPanikClicks(panikClicks + 1);
  };

  return (
    <main className={styles.main}>
      <button
        className={panikClicks === 0 ? s.temptingButton : s.panikButton}
        onClick={handleClick}
      >
        {buttonText}
      </button>
      <audio
        ref={ref}
        loop
        autoPlay
        controls
        id="scream"
        src="/Hysterical_Goat.mp3"
        style={{ display: "hidden" }}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </main>
  );
}
