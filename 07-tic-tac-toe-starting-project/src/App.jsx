import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelect(rowIndex, colIndex) {
    setActivePlayer((curPlayer) => (curPlayer === 'O' ? 'X' : 'O'));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'O'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'X'} />
        </ol>
        <GameBoard onSelectSquare={handleSelect} turns={gameTurns} />
      </div>
      LOG
    </main>
  );
}

export default App;
