// La actualización de los estados en React son asíncronos
import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameToStorage } from './logic/storage/index.js'

function App () {
  /* ❌ Esto está mal:
  - No poner el "window.localStorage.getItem" en la app, ya que se ejecutaría cada vez que se renderice la app. Es lento y síncrono, bloquea.
  - Usar "window.localStorage.getItem" en la inicialización solo.
  - El "useState" nunca puede estar dentro de un if, porque React guarda la posición en un array interno y pierde las posiciones.
  - El "useState" tiene que estar en el cuerpo de la función
  const boardFromLocalStorage = JSON.parse(window.localStorage.getItem("board"));
  const [board, setBoard] = useState(Array(9).fill(null));
  */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null: no hay ganador; false: empate;
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    // Resetear el "localStorage".
    resetGameToStorage()
  }

  const updateBoard = (index) => {
    // No actualizamos la posición si ya tiene algo
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    /* ❌ Nunca mutar las props ni el estado, crear siempre un array con el valor nuevo
    board[index] = turn;
    setBoard(board);
    */

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar aquí partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) // Esto es asíncrono, actualiza el estado
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
