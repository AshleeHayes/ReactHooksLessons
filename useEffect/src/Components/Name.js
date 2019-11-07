import React, { useState } from 'react'

export default function Name() {
  // passed in empty string as default state value
  const [name, setName] = useState('')
  return (
    <label className="header-name">
      <input 
      value={name}
      onChange={e => setName(e.target.value)}
      onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
      placeholder="Untitled"
      />
    </label>
  )
}

//value is name, thes are controlled inputs
//inline function to update name