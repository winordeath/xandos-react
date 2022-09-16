import './Square.css'

function Square(props) {

    const changeSquareStatus = (e) => {

        if (props.playerTurn === "Player 1") {
            props.playerOneSteps.push(e.target.id)
            e.target.className = ['Square', 'X'].join(" ");
            if(isWinnerChecker(props.winningCombos, props.playerOneSteps)) {
                console.log("ПОБЕДИЛ первый")
            }
            props.setPlayerTurn("Player 2")    
        } else if (props.playerTurn === "Player 2") {
            props.playerTwoSteps.push(e.target.id)
            e.target.className = ['Square', 'O'].join(" ");
            if(isWinnerChecker(props.winningCombos, props.playerTwoSteps)) {
                console.log("ПОБЕДИЛ второй")
            }
            props.setPlayerTurn("Player 1")
        }
    }

    const isWinnerChecker = (combos, arr) => {

        for (let i = 0; i < combos.length; i++) {
           let stat = combos[i].every(item => arr.includes(item));
            if (stat) {
                return stat
            }
        }
    }


    return (
        <div onClick={changeSquareStatus} className='Square' id={props.id}></div>
    )
}

export default Square;