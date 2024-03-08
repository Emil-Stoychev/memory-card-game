import * as styles from './style.module.css'
import { authActions } from "../../redux/auth-slice";
import { useDispatch, useSelector } from 'react-redux';

export default function Game({setScreen}) {
    let dispatch = useDispatch();
    let user = useSelector(state => state.auth)

    return (
        <div className={styles.container}>
            <h2>Game page</h2>
            <h2>Level: {user.game.gameLevel}</h2>

            <button className='primaryBtn' onClick={() => dispatch(authActions.setNewScreen('home'))} >BACK</button>
        </div>
    )
}