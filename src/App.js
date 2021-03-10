import './App.css'
import React, { useState, useEffect } from 'react'
import Header from './Components/Header.js'
import ToDoList from './Components/ToDoList.js'
import TodoForm from './Components/TodoForm.js'

function App() {
  const [toDo, settoDo] = useState('')

  let data = []

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   settoDo(e)
  //   data.push(e)
  //   console.log('LOL IT WORKS')
  //   console.log('data', data, 'toDo', toDo)
  // }

  return (
    <div>
      <Header />
      <TodoForm />
      <ToDoList />
    </div>
  )
}

export default App
