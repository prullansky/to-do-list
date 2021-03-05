import './App.css'
import React, { useState, useEffect } from 'react'
import ToDo from './Components/ToDo.js'
import TypingBox from './Components/TypingBox.js'

function App() {
  const [toDo, settoDo] = useState('')

  let data = []

  const handleSubmit = (e) => {
    e.preventDefault()
    data.push(e)
    console.log('LOL IT WORKS')
  }

  return (
    <div>
      <TypingBox handleSubmit={handleSubmit} data={data} />
      <ToDo />
    </div>
  )
}

export default App
