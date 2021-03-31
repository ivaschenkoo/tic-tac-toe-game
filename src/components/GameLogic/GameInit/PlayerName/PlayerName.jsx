import React from 'react';


const PlayerName = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.title}</label>
            <input id={props.id}
                   type='text'
                   placeholder='Name'
                   onChange={ev => props.handleSetName(ev, props.id)}
            />
        </>
    )
}

export default PlayerName