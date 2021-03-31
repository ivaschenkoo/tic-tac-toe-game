import React from 'react';
import styles from './GameMenu.module.css'
import ticTacToe from './../../images/tic-tac-toe.svg'
import {NavLink} from "react-router-dom";


const GameMenu = (props) => {
    return (
        <article className={styles.wrapper}>
            <img src={ticTacToe} alt="tic-tac-toe game" width='150px' height='auto'/>
            <div className={styles.linkWrapper}>
                <NavLink to='/game/pvp' className={styles.link}>player vs player</NavLink>
                <NavLink to='/game/pvb' className={styles.link}>player vs bot</NavLink>
            </div>
        </article>
    )
}

export default GameMenu