import * as styles from "./cardTable.module.css";
import Card from './Card'

export default function CardTable() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 4 }, (_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {Array.from({ length: 5 }, (_, colIndex) => (
            <Card key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}
