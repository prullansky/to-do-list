import React from 'react'

export default function ToDoList(props) {
  return (
    <div>
      {props.list.map((element, elementIndexInArray) => {
        return (
          <div>
            <ul key={elementIndexInArray}>
              <li>{element}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
