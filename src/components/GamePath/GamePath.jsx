import './GamePath.css'
import Square from "./Square/Square";



function GamePath(props) {

    const squares = [...Array(9)].map((item, index) => <Square 
    id={index+1} 
    status={props.status} 
    setStatus={props.setStatus}
    winningCombos={props.winningCombos} 
    playerOneSteps={props.playerOneSteps} 
    playerTwoSteps={props.playerTwoSteps}
    playerTurn={props.playerTurn} 
    setPlayerTurn={props.setPlayerTurn}
    setPlayerOneSteps={props.setPlayerOneSteps}
     setPlayerTwoSteps={props.setPlayerTwoSteps} /> );

    return (
        <div className="GamePath">
            {squares}
        </div>
    )
}

export default GamePath;