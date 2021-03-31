import React, {useState} from 'react';
import GameInit from "./GameInit/GameInit";
import Game from "../Game/Game";
import {withRouter} from "react-router-dom";
import {botMove} from "../common/botLogic";


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

    const checkWin = (newCells) => {
        for (let i = 0; i < winOptions.length; i++) {
            let [a, b, c] = winOptions[i];
            if (newCells[a] !== ' ' && (newCells[a] === newCells[b]) && (newCells[a] === newCells[c])) {
                setGameStatus(`${newCells[a]} wins`);
                setPlayers(prevState => {
                    let newState;
                    if (players.firstPlayer.item === newCells[a]) {
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
        if (moveNumber === 9) {
            setGameStatus('draw');
        }
        setMoveNumber(moveNumber + 1)
    }

    const makeMove = (index) => {
        if (cells[index] === ' ') {
            let newCells = [...cells];
            newCells.splice(index, 1, currentItem)
            setCell(newCells)
            checkWin(newCells)
        }
    }

    const makeBotMove = () => {
        let index = botMove(cells, winOptions, players);
        makeMove(index);
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
                 players={players}
                 cells={cells}
                 currentItem={currentItem}
                 moveNumber={moveNumber}
                 makeMove={makeMove}
                 makeBotMove={makeBotMove}
                 playAgain={playAgain}/>
}

export default withRouter(GameContainer)
