import React from 'react';
import './App.css';
import GameMenu from "./components/GameMenu/GameMenu";
import {Route} from "react-router-dom";
import GameContainer from "./components/GameContainer/GameContainer";


const App = (props) => {
    return (
        <div className="wrapper">
            <Route exact path="/" render={() => <GameMenu />} />
            <Route path="/game/:gamestatus?" render={() => <GameContainer /> } />
        </div>
    );
}

export default App;
