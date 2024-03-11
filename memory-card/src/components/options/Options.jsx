import React from "react";
import * as styles from "./style.module.css";
import { authActions } from "../../redux/auth-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Options({ setScreen }) {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth.user);

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

      <div className={styles.score}>
        <h2>Your points: {user.points}</h2>
        <div className={styles.subDiv}>
          <h1 className={styles.gameLevelTitle}>Easy</h1>
          <h2>
            <span>Best:</span> <span>{user.easy.bestMoves}</span>
          </h2>
          <h2>
            <span>Best misses:</span> <span>{user.easy.bestMisses}</span>
          </h2>
          <h2>
            <span>Last game moves:</span> <span>{user.easy.lastMoves}</span>
          </h2>
          <h2>
            <span>Last game misses:</span> <span>{user.easy.lastMisses}</span>
          </h2>
        </div>
        <div className={styles.subDiv}>
          <h1 className={styles.gameLevelTitle}>Normal</h1>
          <h2>
            <span>Best:</span> <span>{user.normal.bestMoves}</span>
          </h2>
          <h2>
            <span>Best misses:</span> <span>{user.normal.bestMisses}</span>
          </h2>
          <h2>
            <span>Last game moves:</span> <span>{user.normal.lastMoves}</span>
          </h2>
          <h2>
            <span>Last game misses:</span> <span>{user.normal.lastMisses}</span>
          </h2>
        </div>
        <div className={styles.subDiv}>
          <h1 className={styles.gameLevelTitle}>Hard</h1>
          <h2>
            <span>Best:</span> <span>{user.hard.bestMoves}</span>
          </h2>
          <h2>
            <span>Best misses:</span> <span>{user.hard.bestMisses}</span>
          </h2>
          <h2>
            <span>Last game moves:</span> <span>{user.hard.lastMoves}</span>
          </h2>
          <h2>
            <span>Last game misses:</span> <span>{user.hard.lastMisses}</span>
          </h2>
        </div>
      </div>

      <button
        className="primaryBtn"
        onClick={() => dispatch(authActions.setNewScreen("home"))}
      >
        BACK
      </button>
    </div>
  );
}
