import { createSlice } from "@reduxjs/toolkit";
import Snackbar from "awesome-snackbar";
import { generateEmojis } from "../components/utils";
import { saveDataToLocalStorage } from '../components/utils'

const authSlice = createSlice({
  name: "auth",
  initialState: {
    options: {
      easy: {
        rows: 2,
      },
      normal: {
        rows: 4,
      },
      hard: {
        rows: 6,
      },
    },
    user: {
      points: 0,
      easy: {
        bestMoves: 0,
        bestMisses: 0,
        lastMoves: 0,
        lastMisses: 0,
      },
      normal: {
        bestMoves: 0,
        bestMisses: 0,
        lastMoves: 0,
        lastMisses: 0,
      },
      hard: {
        bestMoves: 0,
        bestMisses: 0,
        lastMoves: 0,
        lastMisses: 0,
      }
    },
    game: {
      gameLevel: "easy",
      moves: 0,
      misses: 0,
      points: 0,
      endGame: false,
      emojis: generateEmojis("easy"),
    },
    restart: 0,
    screen: {
      on: "home",
    },
  },
  error: {
    message: "",
    type: "",
  },
  reducers: {
    setUserFromLocalStorage(state, action) {
      state.user = action.payload
    },
    setNewScreen(state, action) {
      state.screen.on = action.payload;
    },
    startNewGame(state, action) {
      state.restart++, (state.screen.on = "game");
      state.game = {
        gameLevel: action.payload,
        moves: 0,
        misses: 0,
        points: 0,
        endGame: false,
        emojis: generateEmojis(action.payload),
      };
    },
    userAction(state, action) {
      if (action.payload) {
        state.game.moves++;
        state.game.points++;
      } else {
        state.game.moves++;
        state.game.misses++;
      }

      if (
        (state.game.gameLevel === "easy" && state.game.points == 5) ||
        (state.game.gameLevel === "normal" && state.game.points == 10) ||
        (state.game.gameLevel === "hard" && state.game.points == 15)
      ) {
        state.game.endGame = true;

        if (state.user && state.game.gameLevel) {
          state.user[state.game.gameLevel] = {
            bestMoves: state.user?.[state.game.gameLevel].bestMoves == 0 ? state.game.moves : state.user?.[state.game.gameLevel].bestMoves < state.game.moves ? state.user?.[state.game.gameLevel].bestMoves : state.game.moves,
            bestMisses: state.user?.[state.game.gameLevel].bestMisses == 0 ? state.game.misses : state.user?.[state.game.gameLevel].bestMisses < state.game.misses ? state.user?.[state.game.gameLevel].bestMisses : state.game.misses,
            lastMoves: state.game.moves,
            lastMisses:  state.game.misses,
          };
          state.user.points += state.game.points

          saveDataToLocalStorage("sessionGame", state.user, 'memory-card-game');
        }
      } else {
        state.game.endGame = false;
      }
    },

    // ERRORS HANDLER
    setError(state, action) {
      if (action.payload?.message == "Невалиден тоукън!") {
        state.error = {
          message: action.payload?.message,
          type: action?.payload?.type,
        };
        state.isLoggedIn = false;
        state.user = {};
        localStorage.removeItem("sessionStorage");

        new Snackbar(action.payload?.message, {
          timeout: 3500,
        });
      } else if (action.payload?.type == "loading") {
        if (action.payload?.message != "") {
          new Snackbar(action.payload?.message, {
            iconSrc: "./loading-gif.gif",
            timeout: 1500,
          });
        }
      } else if (action.payload?.type == "download image") {
        new Snackbar(`Image generated!`, {
          position: "bottom-center",
          timeout: 3500,
          style: {
            container: [
              ["background-color", "green"],
              ["border-radius", "5px"],
            ],
          },
        });
      } else if (action.payload?.type == "logged") {
        new Snackbar(`Welcome, `, {
          timeout: 3000,
          position: "bottom-center",
          theme: "dark",
          position: "top-center",
          actionText: `${action.payload?.message}! 😇`,
        });
      } else {
        if (action.payload?.message != "") {
          new Snackbar(action.payload?.message, {
            timeout: 3000,
          });
        }
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;