import React from 'react';
import styles from './Cell.module.css'


const Cell = (props) => {
    return (
        <button className={styles.wrapper}
                onClick={() => {
                    props.makeMove(props.index)
                }}
        >
            {props.value}
        </button>
    )
}

export default Cell