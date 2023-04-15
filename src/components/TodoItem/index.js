// Write your code here
import './index.css'

const TodoItem = props => {
  const {tododetails, deleteTodoinjs} = props
  const {id, title} = tododetails

  const onDeleteTodItem = () => {
    deleteTodoinjs(id)
  }

  return (
    <li className="list-container">
      <div className="btn-container">
        <p className="main-title">{title}</p>
        <button type="button" className="button" onClick={onDeleteTodItem}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
