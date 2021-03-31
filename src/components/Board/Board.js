import React, {useEffect} from 'react';
import styles from './Board.module.css'
import Cell from "../Cell/Cell";


const Board = (props) => {

    useEffect(() => {
        if (props.moveNumber % 2 === 0 && props.mode === 'pvb' && props.gameStatus === 'during') {
            props.makeBotMove()
        }
    }, [props.gameStatus, props.moveNumber])

    const renderCell = (index) => {
        return <Cell key={index} index={index} value={props.cells[index]} makeMove={props.makeMove} />
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.row}>
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div className={styles.row}>
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>
            <div className={styles.row}>
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </section>
    )
}

export default Board