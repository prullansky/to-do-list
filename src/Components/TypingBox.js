import React, { useState, useEffect } from 'react'

export default function TypingBox(props) {
  const [item, setItem] = useState('')

  console.log(item)
  console.log(props.data)

  const handleChange = ({ target }) => setItem(target.value)

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          To-do:
          <input value={item} type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
