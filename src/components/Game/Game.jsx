import React from 'react';
import styles from './Game.module.css'
import Board from "../Board/Board";
import GameInfo from "../GameInfo/GameInfo";
import {NavLink} from "react-router-dom";


const Game = (props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.status}>Game status: {props.gameStatus} <br/>
                {props.gameStatus !== 'during' ? null : `${props.currentItem} moves, ${props.moveNumber} move`}
            </p>
            {props.gameStatus !== 'during' ? (
                    <div className={styles.buttonWrapper}>
                        <button onClick={() => props.playAgain()}>Play again</button>
                    </div>
                )
                : <Board moveNumber={props.moveNumber}
                         setMoveNumber={props.setMoveNumber}
                         players={props.players}
                         gameStatus={props.gameStatus}
                         setGameStatus={props.setGameStatus}
                         cells={props.cells}
                         makeMove={props.makeMove}/>
            }
            <GameInfo players={props.players}/>
            <NavLink to='/' className={styles.link}>Back to menu</NavLink>
        </div>
)
}

export default Game
