import React from 'react';
import styles from './GameInfo.module.css'


const GameInfo = (props) => {
    let firstPlayer = props.players.firstPlayer;
    let secondPlayer = props.players.secondPlayer;

    return (
        <aside className={styles.wrapper}>
            <h2 className={styles.title}>Score:</h2>
            <p>{firstPlayer.name} ({firstPlayer.item}): <span className={styles.bold}>{firstPlayer.wins}</span></p>
            <p>{secondPlayer.name} ({secondPlayer.item}): <span className={styles.bold}>{secondPlayer.wins}</span></p>
        </aside>
    )
}

export default GameInfo