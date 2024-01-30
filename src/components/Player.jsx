import { useState } from 'react'

export default function Player({ initialName, symbol, isActive }) {
  const [plyaerName, setPlayerName] = useState(initialName)
  const [isEditting, setIsEditting] = useState(false)

  function handleEditClick() {
    setIsEditting((editting) => !editting)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{plyaerName}</span>
  let btnCaption = 'Edit'

  if (isEditting) {
    editablePlayerName = <input type="text" required value={plyaerName} onChange={handleChange} />
    btnCaption = 'Save'
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}
