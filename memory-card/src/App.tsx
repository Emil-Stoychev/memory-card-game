import "./App.css";
import Background from "./components/background/Background.tsx";
import Home from "./components/home/Home.tsx";
import ForUs from "./components/forus/ForUs.tsx";
import Options from "./components/options/Options.tsx";
import { useDispatch, useSelector } from "react-redux";
import Game from "./components/game/Game.tsx";
import { getDataFromLocalStorage, saveDataToLocalStorage } from './components/utils'
import { useEffect } from "react";
import { authActions } from './redux/auth-slice'

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
