import * as styles from "./cardTable.module.css";
import { emojis } from "../utils";
import { useState } from "react";

export default function CardTable() {
  const [flipped, setFlipped] = useState(false);

  function flipCard(event) {
    if(event.target.classList.contains(styles.deletedCard)) return
    event.target.classList.toggle(styles.isFlipped);

    if (event.target.classList.contains(styles.isFlipped)) {
      setTimeout(() => {
        setFlipped((state) => !state);
      }, 200);
    } else {
      setFlipped((state) => !state);
    }
  }

  return (
    <div onClick={flipCard} className={styles.card}>
      {flipped && emojis[Math.floor(Math.random() * emojis.length)]}
    </div>
  );
}
