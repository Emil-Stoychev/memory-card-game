import * as styles from "./style.module.css";
import { authActions } from "../../redux/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import CardTable from "./CardTable";

export default function Game() {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h2>Level: {user.game.gameLevel}</h2>
        <h2>Timer: 0:00</h2>
        <h2>Moves: 0</h2>
        <h2>Misses: 0</h2>
        <h2>Points: 0</h2>
      </div>

      <CardTable />

      <div className={styles.bottomBtns}>
        <button
          className="primaryBtn"
          onClick={() => dispatch(authActions.setNewScreen("home"))}
        >
          RESTART
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
