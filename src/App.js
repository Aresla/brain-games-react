import React from 'react';
import './App.css';
import {GameSelector} from "./components/GameSelector/GameSelector";
import {WelcomeMessage} from "./components/WelcomeMessage/WelcomeMessage";
import {welcomeMessage} from "./constants/constants";
import {PrimeGame} from "./components/PrimeGame/PrimeGame";
import {CalcGame} from "./components/CalcGame/CalcGame";
import {EvenGame} from "./components/EvenGame/EvenGame";
import {ProgressionGame} from "./components/ProgressionGame/ProgressionGame";
import {GcdGame} from "./components/GcdGame/GcdGame";
import { Layout } from 'antd';

const gameMap = {
  Prime: <PrimeGame/>,
  Even: <EvenGame/>,
  Calc: <CalcGame/>,
  Progression: <ProgressionGame/>,
  Gcd: <GcdGame/>,
};

export class App extends React.Component {
  state = {
    gameList: ['Calc', 'Prime', 'Even', 'Progression', 'Gcd'],
    activeGame: 'Calc',
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
          <header className="App-header">
            <WelcomeMessage message ={welcomeMessage}/>
            <br />
            <GameSelector onGameSelect={this.handleGameSelect} gameList={gameList}/>
            {gameMap[activeGame]}
          </header>
        </div>
    );
  }
}

