import React from 'react';
import './App.css';
import {GameSelector} from "./components/GameSelector/GameSelector";
import {WelcomeMessage} from "./components/WelcomeMessage/WelcomeMessage";
import {gameList, welcomeMessage} from "./constants/constants";
import {PrimeGame} from "./games/PrimeGame/PrimeGame";
import {CalcGame} from "./games/CalcGame/CalcGame";
import {EvenGame} from "./games/EvenGame/EvenGame";
import {ProgressionGame} from "./games/ProgressionGame/ProgressionGame";
import {GcdGame} from "./games/GcdGame/GcdGame";

const gameMap = {
  PRIME: <PrimeGame/>,
  EVEN: <EvenGame/>,
  CALC: <CalcGame/>,
  PROGRESSION: <ProgressionGame/>,
  GCD: <GcdGame/>,
};

export class App extends React.Component {
  state = {
    gameList,
    activeGame: gameList[2],
  };

  handleGameSelect = (e) => {
    this.setState({
      activeGame: e.target.value,
    })
  };

  render(){
    const { gameList, activeGame } = this.state;
    return (
        <div className="App">
            <WelcomeMessage message ={welcomeMessage}/>
            <br />
            <GameSelector onGameSelect={this.handleGameSelect} gameList={gameList}/>
            {gameMap[activeGame]}
        </div>
    );
  }
}

