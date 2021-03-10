import React, { useState, useEffect } from 'react'

export default function TypingBox(props) {
  const [userInput, setUserInput] = useState('')

  const data = []

  //   const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setFormState((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  console.log(userInput)
  console.log(props.data)

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    data.push(userInput)
    setUserInput('')
    console.log('data', data, 'item', userInput)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          To-do:
          <input
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Enter task..."
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
