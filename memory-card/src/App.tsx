import './App.css'
import Background from './components/background/Background.tsx'
import Home from './components/home/Home.tsx'

function App() {
  // let dispatch = useDispatch()
  // const user = useSelector(state => state.auth.user)
  // const user = useSelector(state => state.auth.user)
  // dispatch(authActions.setError({ message: res?.message, type: ''}))

  return (
    <div className='mainDivCnt'>
    <Background />

    <Home />
    </div>
  )
}

export default App
