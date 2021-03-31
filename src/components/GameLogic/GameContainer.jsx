import React, {useEffect, useState} from 'react';
import GameInit from "./GameInit/GameInit";
import Game from "../Game/Game";
import {withRouter} from "react-router-dom";
import {botMove} from "../common/BotLogic";


const GameContainer = (props) => {
    let mode = props.match.params.gamestatus || 'pvp';
    let [cells, setCell] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    let [players, setPlayers] = useState({
        firstPlayer: {name: null, item: null, wins: 0},
        secondPlayer: {name: null, item: null, wins: 0}
    })
    let [moveNumber, setMoveNumber] = useState(1);
    let [gameStatus, setGameStatus] = useState('during');
    let currentItem = moveNumber % 2 ? players.firstPlayer.item : players.secondPlayer.item;
    let winOptions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    useEffect(() => {
        checkWin()
    }, [moveNumber])

    const makeMove = (index) => {
        if (cells[index] === ' ') {
            setCell((prevState) => {
                prevState[index] = currentItem;
                return [...prevState]
            })
            setMoveNumber(moveNumber + 1)
        }
    }

    if (mode === 'pvb') {
        if (moveNumber % 2 === 0) {
            botMove(cells, winOptions, makeMove, players)
        }
    }

    const checkWin = () => {
        for (let i = 0; i < winOptions.length; i++) {
            let [a, b, c] = winOptions[i];
            if (cells[a] !== ' ' && (cells[a] === cells[b]) && (cells[a] === cells[c])) {
                setGameStatus(`${cells[a]} wins`);
                setPlayers(prevState => {
                    let newState;
                    if (players.firstPlayer.item === cells[a]) {
                        newState = {
                            ...prevState,
                            firstPlayer: {...prevState.firstPlayer, wins: prevState.firstPlayer.wins + 1},
                        }
                        return newState;
                    } else {
                        newState = {
                            ...prevState,
                            secondPlayer: {...prevState.secondPlayer, wins: prevState.secondPlayer.wins + 1}
                        }
                        return newState
                    }
                })
                return true
            }
        }
        if (moveNumber === 10) {
            setGameStatus('draw');
        }
    }

    const playAgain = () => {
        setCell([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
        setMoveNumber(1);
        setGameStatus('during')
    }

    if (!players.firstPlayer.name) {
        return <GameInit initGame={setPlayers} mode={mode} />
    }

    return <Game mode={mode}
                 gameStatus={gameStatus}
                 setGameStatus={setGameStatus}
                 players={players}
                 cells={cells}
                 currentItem={currentItem}
                 moveNumber={moveNumber}
                 setMoveNumber={setMoveNumber}
                 makeMove={makeMove}
                 playAgain={playAgain} />
}

export default withRouter(GameContainer)
