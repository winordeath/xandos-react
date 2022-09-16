import './App.css';
import GamePath from './components/GamePath/GamePath';
import { useState } from 'react';



function App(props) {

  const [playerTurn,setPlayerTurn] = useState("Player 1")
  const [status,setStatus] = useState("X")
  const [playerOneSteps,setPlayerOneSteps] = useState([]);
  const [playerTwoSteps,setPlayerTwoSteps] = useState([]);
  const winningCombos = [["1","2","3"],["1","4","7"],["1","5","9"],["2","5","8"],["3","6","9"],["7","8","9"],["3","5","7"],["4","5","6"]]


  return (
    <div>
      <h1>{playerTurn},your turn</h1>
      <GamePath status={status} setStatus={setStatus} winningCombos={winningCombos} playerOneSteps={playerOneSteps} playerTwoSteps={playerTwoSteps} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setPlayerOneSteps={setPlayerOneSteps} setPlayerTwoSteps={setPlayerTwoSteps}/>
    </div>
  )
}

export default App;
