import * as styles from "./style.module.css";
import { emojis } from "../utils";

export default function Background() {
  return (
    <div className={styles.container}>
      {/* Render multiple rows and columns of cards */}
      {Array.from({ length: 12 }, (_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {Array.from({ length: 6 }, (_, colIndex) => (
            <div key={colIndex} className={styles.card}>
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
