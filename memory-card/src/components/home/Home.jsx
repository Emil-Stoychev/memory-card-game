import React from "react";
import { useState } from "react";
import * as styles from "./homeStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/auth-slice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const changeScreen = (newScreen) => {
    dispatch(authActions.setNewScreen(newScreen));
  };

  const startGame = (gameLevel) => {
    dispatch(authActions.startNewGame(gameLevel));
  }

  const [menuBtns, setMenuBtns] = useState(false);


  return (
    <>
      <div className={styles.container}>
        <h1>Memory Card Game</h1>

        {menuBtns ? (
          <div className={styles.divBtns}>
            <button className="primaryBtn" onClick={() => startGame('easy')}>
              Easy
            </button>
            <button
              className="primaryBtn"
              onClick={() => startGame('normal')}
            >
              Normal
            </button>
            <button
              className="primaryBtn"
              onClick={() => startGame('hard')}
            >
              Hard
            </button>
            <button className="primaryBtn" onClick={() => setMenuBtns(false)}>
              Back
            </button>
          </div>
        ) : (
          <div className={styles.divBtns}>
            <button className="primaryBtn" onClick={() => setMenuBtns(true)}>
              Play
            </button>
            <button
              className="primaryBtn"
              onClick={() => changeScreen("options")}
            >
              Options
            </button>
            <button
              className="primaryBtn"
              onClick={() => changeScreen("forUs")}
            >
              For Us
            </button>
          </div>
        )}
      </div>
    </>
  );
}
