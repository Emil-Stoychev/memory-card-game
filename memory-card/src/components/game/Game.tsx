import * as styles from "./style.module.css";
import { authActions } from "../../redux/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import CardTable from "./CardTable";
import { useState } from "react";

export default function Game() {
  const [resetKey, setResetKey] = useState(0);
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth);

  const resetGame = () => {
    dispatch(authActions.startNewGame(user.game.gameLevel));
    setResetKey((state) => state + 1);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h2>Level: {user.game.gameLevel}</h2>
        <h2>Moves: {user.game.moves}</h2>
        <h2>Misses: {user.game.misses}</h2>
        <h2>Points: {user.game.points}</h2>
      </div>

      <CardTable key={resetKey} />

      <div className={styles.bottomBtns}>
        <button className="primaryBtn" onClick={() => resetGame()}>
          {user.game.endGame ? "START AGAIN" : "RESTART"}
        </button>
        <button
          className="primaryBtn"
          onClick={() => dispatch(authActions.setNewScreen("home"))}
        >
          HOME
        </button>
      </div>
    </div>
  );
}
