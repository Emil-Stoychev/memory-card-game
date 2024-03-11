import "./App.css";
import React from "react";
import Background from "./components/background/Background.jsx";
import Home from "./components/home/Home.jsx";
import ForUs from "./components/forus/ForUs.jsx";
import Options from "./components/options/Options.jsx";
import { useDispatch, useSelector } from "react-redux";
import Game from "./components/game/Game.jsx";
import { getDataFromLocalStorage } from './components/utils.js'
import { useEffect } from "react";
import { authActions } from './redux/auth-slice.js'

function App() {
  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const storedData = getDataFromLocalStorage('sessionGame', 'memory-card-game');

    if(storedData) {
      dispatch(authActions.setUserFromLocalStorage(storedData))
    }
  }, [])

  return (
    <div className="mainDivCnt">
      <Background />

      {user?.screen?.on == 'home' && <Home />}
      {user?.screen?.on == 'game' && <Game />}
      {user?.screen?.on == 'options' && <Options />}
      {user?.screen?.on == 'forUs' && <ForUs />}
    </div>
  );
}

export default App;
