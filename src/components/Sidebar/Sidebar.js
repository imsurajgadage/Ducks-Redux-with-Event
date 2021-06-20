import React from 'react'
import styles from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import {increment } from '../../redux/ducks/counter';
import {time} from '../../redux/ducks/time'

const Sidebar = () => {

    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(increment()); 
        dispatch(time()); 
    }

    return (
        <div className={styles.container}>
            <button onClick={handleIncrement} className={styles.button}>Click<br/> Here</button>
        </div>
    )
}

export default Sidebar
