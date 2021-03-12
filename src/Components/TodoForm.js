export default function TodoForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          {/* To-do: */}
          <input
            value={props.item}
            type="text"
            onChange={props.handleChange}
            placeholder="Enter task..."
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
