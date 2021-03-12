import React, { useState, useEffect } from 'react'

export default function TypingBox(props) {
  const [item, setItem] = useState('')

  const [list, setList] = useState([])

  console.log(item)
  console.log(props.data)

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
      <form onSubmit={handleSubmit}>
        <label>
          To-do:
          <input
            value={item}
            type="text"
            onChange={handleChange}
            placeholder="Enter task..."
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {list.map((element, elementIndexInArray) => {
          return (
            <div>
              <ul>
                <li>{element}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
