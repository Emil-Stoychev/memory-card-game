import * as styles from "./cardTable.module.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { authActions } from "../../redux/auth-slice";

export default function CardTable() {
  const [flippedCard, setFlippedCard] = useState([]);
  const [startIn, setStartIn] = useState(3);
  const [int, setInt] = useState(null);
  let level = useSelector((state) => state.auth.options);
  let game = useSelector((state) => state.auth.game);
  const restarts = useSelector((state) => state.auth.restart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (startIn > -1) return;
    stopMouse();
    startInTimer(setInt, setStartIn);
    dispatch(authActions.startNewGame(game.gameLevel));
  }, [restarts]);

  useEffect(() => {
    stopMouse();
    startInTimer(setInt, setStartIn);
  }, []);

  useEffect(() => {
    if (flippedCard.length == 2) {
      stopMouse();

      if (flippedCard[0].textContent == flippedCard[1].textContent) {
        flippedCard[0].classList.toggle(styles.deletedCard);
        flippedCard[1].classList.toggle(styles.deletedCard);
        dispatch(authActions.userAction(1));
        setTimeout(() => {
          startMouse();
        }, 1500);
      } else {
        setTimeout(() => {
          flippedCard[0].classList.toggle(styles.isFlipped);
          flippedCard[1].classList.toggle(styles.isFlipped);
          dispatch(authActions.userAction(0));
          startMouse();
        }, 1500);
      }
      setFlippedCard([]);
    }
  }, [flippedCard.length]);

  return (
    <div className={styles.container}>
      {game.endGame && <h2 className={styles.endGameMsg}>Congrats!</h2>}
      {startIn > -1 && <h2 data-startin={startIn} className={styles.startInMsg}>{startIn == 0 ? 'GO!' : startIn}</h2>}

      {Array.from({ length: level?.[game?.gameLevel]?.rows }, (_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {Array.from({ length: 5 }, (_, colIndex) => (
            <Card
              key={colIndex}
              emoji={game.emojis[rowIndex * 5 + colIndex]}
              flippedCard={flippedCard}
              setFlippedCard={setFlippedCard}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function startInTimer(setInt, setStartIn) {
  const intervalId = setInterval(() => {
    setStartIn((prevStartIn) => {
      if (prevStartIn > -1) {
        return prevStartIn - 1;
      } else {
        startMouse();
        clearInterval(intervalId);
        return prevStartIn;
      }
    });
  }, 1000);
  setInt(intervalId);

  return () => {
    setStartIn(3);
    stopMouse();
    clearInterval(intervalId);
  };
}

function stopMouse() {
  document.addEventListener("mousedown", disableMouseClicks, true);
  document.addEventListener("mouseup", disableMouseClicks, true);
  document.addEventListener("click", disableMouseClicks, true);
  document.addEventListener("contextmenu", disableMouseClicks, true);
}

function startMouse() {
  document.removeEventListener("mousedown", disableMouseClicks, true);
  document.removeEventListener("mouseup", disableMouseClicks, true);
  document.removeEventListener("click", disableMouseClicks, true);
  document.removeEventListener("contextmenu", disableMouseClicks, true);
}

function disableMouseClicks(event) {
  event.preventDefault();
  event.stopPropagation();
}
