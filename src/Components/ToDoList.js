export default function ToDoList(props) {
  return (
    <div>
      {props.list.map((element, elementIndexInArray) => {
        return (
          <div key={elementIndexInArray} onChange={props.handleClick}>
            <input type="checkbox" id={element} name={element} />
            <label htmlFor={element}>{element}</label>
            <button onClick={props.handleDelete}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}
