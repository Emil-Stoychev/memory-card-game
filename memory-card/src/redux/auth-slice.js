import { createSlice } from "@reduxjs/toolkit";
import Snackbar from "awesome-snackbar";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    game: {},
  },
  error: {
    message: "",
    type: "",
  },
  reducers: {
    setEmployeeActive(state, action) {
      if(!state.employees.find(x => x._id == action.payload?._id)) {
        state.employees = [...state.employees, action.payload];
      }
    },
    removeEmployeeActive(state, action) {
      state.employees = state.employees.filter(
        (x) => x._id != action.payload._id
      );
    },
    setAllEmployees(state, action) {
      state.employees = action.payload;
    },
    setEmployeeAfterEdit(state, action) {
      state.employees = state.employees.map((x) => {
        if (x._id == action.payload._id) {
          return action.payload;
        }

        return x;
      });
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("sessionStorage", action.payload.token);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = {};
      localStorage.removeItem("sessionStorage");
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
            timeout: 3000
          });
        }
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;