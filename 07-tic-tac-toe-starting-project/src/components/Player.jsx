import { useState } from 'react';

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  const [isEditing, setIsEditing] = useState(false);
  function handleEditOnClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  let playerNameContainer = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';
  if (isEditing) {
    playerNameContainer = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameContainer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditOnClick}>{btnCaption}</button>
    </li>
  );
}
