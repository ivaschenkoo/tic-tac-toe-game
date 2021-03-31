import React from 'react';
import './App.css';
import GameMenu from "./components/GameMenu/GameMenu";
import {Route} from "react-router-dom";
import GameContainer from "./components/GameLogic/GameContainer";


const App = (props) => {
    return (
        <div className="wrapper">
            <Route path="/" render={() => <GameMenu />} />
            <Route path="/game/:gamestatus?" render={() => <GameContainer /> } />
        </div>
    );
}

export default App;
