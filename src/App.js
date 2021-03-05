import './App.css'
import React, { useState, useEffect } from 'react'
import ToDo from './Components/ToDo.js'
import TypingBox from './Components/TypingBox.js'

function App() {
  const [toDo, settoDo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    settoDo(toDo)
  }

  return (
    <div>
      <TypingBox handleSubmit={handleSubmit} />
      <ToDo />
    </div>
  )
}

export default App
