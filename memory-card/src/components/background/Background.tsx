import * as styles from "./style.module.css";
import { emojis } from "../utils";

export default function Background() {
  return (
    <>
      <div className={styles.container}>
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {Array.from({ length: 8 }, (_, colIndex) => (
              <div key={colIndex} className={styles.card}>
                {emojis[Math.floor(Math.random() * emojis.length)]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
