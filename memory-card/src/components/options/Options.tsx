import * as styles from './style.module.css'
import { authActions } from "../../redux/auth-slice";
import { useDispatch } from 'react-redux';

export default function Options({setScreen}) {
    let dispatch = useDispatch();

    return (
        <>
            <h2>Options page</h2>

            <button className='primaryBtn' onClick={() => dispatch(authActions.setNewScreen('home'))} >BACK</button>
        </>
    )
}