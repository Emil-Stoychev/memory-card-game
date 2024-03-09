import * as styles from "./style.module.css";
import { authActions } from "../../redux/auth-slice";
import { useDispatch } from "react-redux";

export default function Options({ setScreen }) {
  let dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2>Instructions to play memory</h2>

      <p>
        Test your memory with this memory game. First select the difficulty
        level. The higher the number, the more cards are in the memo game. On
        the game board, there are always two identical images. Start the game by
        flipping a card. Then try to find another card that has the same image
        as the first. If you can't find a pair, the flipped cards will be
        flipped back with the face down. Try to remember these images as it
        becomes easier to find pairs the longer you play. When you find a pair
        they are removed from the board and when you find all the pairs in this
        memory, you have completed the level.
      </p>

      <button
        className="primaryBtn"
        onClick={() => dispatch(authActions.setNewScreen("home"))}
      >
        BACK
      </button>
    </div>
  );
}
