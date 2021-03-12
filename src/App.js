import './App.css'
import React, { useState, useEffect } from 'react'
import Header from './Components/Header.js'
import ToDoList from './Components/ToDoList.js'
import TodoForm from './Components/TodoForm.js'

function App() {
  const [item, setItem] = useState('')

  const [list, setList] = useState([])

  const handleChange = (e) => {
    setItem(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList((prevlist) => [...prevlist, item])
    setItem('')
    console.log(list)
  }

  return (
    <div>
      <Header />
      <TodoForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        item={item}
      />
      <ToDoList list={list} />
    </div>
  )
}

export default App
