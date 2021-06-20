import React from 'react'
import {useSelector} from 'react-redux'
import styles from './Footer.module.css'

const Footer = () => {
    const count = useSelector((state) => state.counter.count)
    return (
        <div className={styles.container}>
            <p>You Clicked {count} times</p>
        </div>
    )
}

export default Footer
