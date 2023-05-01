import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import { TURNS, WINNER_COMBOS } from './components/Constants'
import { checkWinner } from './Logic/Board'
import { WinnerModal } from './components/WinnerModal'

function App() {
  const [board, setBoard]= useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  } )

 const [turn, setTurn] = useState(() =>{
  const turnFromStorage =  window.localStorage.getItem('turn')
  return turnFromStorage ?? TURNS.X;
 } )

 const [winner, setWinner] = useState(null); 



 const resetGame = () =>{
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)(Array(9).fill(null))

  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
 }

 const checkEndGame= (newBoard) =>{
    return newBoard.every((square) => square != null)
 }

 const updateBoard = (index) => {
    //Si ya tiene algo, no escribir ningun valor
    if (board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [... board]
    newBoard[index]= turn
    setBoard(newBoard)
  //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
    //guardar la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti();
      setWinner(newWinner);
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
 }

 return(  
    <main className='board'>
      <h1>Gato y el Ratón</h1>
      <button onClick={resetGame}>Reinicia el Juego</button>
      <section className='game' >
          {
            board.map((_, index) => {
              return (
                <Square
                key={index}
                index= {index}
                updateBoard ={updateBoard}>

                  {board[index]}  
                </Square>
                )
              })
          }
      </section>
      <section className='turn'>
        <Square isSelected={turn=== TURNS.X}>{TURNS.X} </Square>
        <Square isSelected={turn=== TURNS.O}>{TURNS.O} </Square>  
      </section>

          <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )     
}

export default App
