import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelect() {
    setActivePlayer((curPlayer) => (curPlayer === 'O' ? 'X' : 'O'));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'O'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'X'} />
        </ol>
        <GameBoard onSelectSquare={handleSelect} />
      </div>
      LOG
    </main>
  );
}

export default App;
