import React, { useState, useEffect } from 'react'

export default function TypingBox() {
  const [item, setItem] = useState('')

  console.log(item)

  const handleChange = ({ target }) => setItem(target.value)

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          To-do:
          <input value={item} type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
