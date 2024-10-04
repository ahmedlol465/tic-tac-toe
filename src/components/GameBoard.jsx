import { useState } from "react"

// rowIndex make index for the possition of data 

export default function GameBoard({onSelectSquare, board}) {

    // console.log(turns);



    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, columsIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard =  [...prevGameBoard.map(innerArray => [...innerArray])]// access inner array 
    //         updatedBoard[rowIndex][columsIndex] = activePlayerSymbol
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }



    



    return <ol id="game-board">
        {board.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((PlayerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                        disabled = {PlayerSymbol !== null}>
                            {PlayerSymbol}
                        </button>
                    </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>
    
}
