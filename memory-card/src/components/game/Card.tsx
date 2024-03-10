import * as styles from "./cardTable.module.css";
import { useEffect, useState } from "react";

export default function CardTable({emoji, flippedCard, setFlippedCard}) {
  const [flipped, setFlipped] = useState(false);
  
  function flipCard(event) {
    if(flippedCard.length == 2) return
    if(event.target.classList.contains(styles.deletedCard)) return
    if(event.target.classList.contains(styles.isFlipped)) return
    event.target.classList.toggle(styles.isFlipped);

    if (event.target.classList.contains(styles.isFlipped)) {
      setTimeout(() => {
        setFlipped((state) => !state);
        setFlippedCard(state => [...state, event.target])
      }, 200);
    } else {
      setFlipped((state) => !state);
    }
  }

  useEffect(() => {
    if(flippedCard.length == 0) {
      setTimeout(() => {
        setFlipped(false);
      }, 1500);
    }
  }, [flippedCard])

  return (
    <div onClick={flipCard} className={styles.card}>
      {flipped && emoji}
    </div>
  );
}
