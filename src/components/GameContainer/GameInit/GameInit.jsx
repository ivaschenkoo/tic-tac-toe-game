import React, {useState} from 'react';
import styles from "./GameInit.module.css";
import {NavLink} from "react-router-dom";
import PlayerName from "./PlayerName/PlayerName";


const GameInit = (props) => {
    let initialState;
    let newState;

    if (props.mode === 'pvp') {
        initialState = ['Player 1', 'Player 2']
    } else {
        initialState = 'Player'
    }
    let [names, setName] = useState(initialState);
    let [playerItem, setPlayerItem] = useState('X');

    let setInit = () => {
        newState = {
            firstPlayer: {name: names || 'Player', item: playerItem, wins: 0,},
            secondPlayer: {name: 'Bot', item: playerItem === 'X' ? 'O' : 'X', wins: 0,}
        };
        if (props.mode === 'pvp') {
            newState = {
                firstPlayer: {...newState.firstPlayer, name: names[0]},
                secondPlayer: {...newState.secondPlayer, name: names[1]}
            }
        }
        props.initGame(newState)
    }

    let handleSetName = (ev, id) => {
        let value = ev.currentTarget.value;

        if (props.mode === 'pvp') {
            if (id === 'firstName') {
                setName(prevState => {
                    prevState[0] = value;
                    return [...prevState]
                })
            } else {
                setName(prevState => {
                    prevState[1] = value;
                    return [...prevState]
                })
            }
        } else {
            setName(value)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                {props.mode !== 'pvp' ? <PlayerName id={'name'}
                                                    title={'Player name'}
                                                    handleSetName={handleSetName}/>
                    :
                    <>
                        <PlayerName id={'firstName'} title={'First player name'} handleSetName={handleSetName}/>
                        <PlayerName id={'secondName'} title={'Second player name'} handleSetName={handleSetName}/>
                    </>
                }

                <div>
                    <p className={styles.blockDescription}>First player plays for</p>
                    <div className={styles.radioWrapper}>
                        <div className={styles.radio}>
                            <input type='radio'
                                   id='xItem'
                                   name="drone"
                                   value="X"
                                   onChange={(ev) => {
                                       setPlayerItem(ev.currentTarget.value)
                                   }}/>
                            <label htmlFor="xItem">X</label>
                        </div>
                        <div className={styles.radio}>
                            <input type='radio'
                                   id='oItem'
                                   name="drone"
                                   value="O"
                                   onChange={(ev) => {
                                       setPlayerItem(ev.currentTarget.value)
                                   }}/>
                            <label htmlFor="oItem">O</label>
                        </div>
                    </div>
                </div>
                <button className={styles.button} onClick={() => {
                    setInit()
                }}>Submit
                </button>

            </div>
            <NavLink to='/' className={styles.link}>Back to menu</NavLink>
        </div>
    )
}

export default GameInit