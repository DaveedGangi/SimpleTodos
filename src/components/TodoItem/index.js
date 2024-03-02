// Write your code here

import './index.css'

const TodoItemPart = props => {
  const {todoItem, removingCard} = props

  const {title, id} = todoItem

  const removeCard = () => {
    removingCard(id)
    console.log(id)
  }

  return (
    <li className="EachTodo">
      <p className="eachTodo">{title}</p>
      <button className="deleteButton" onClick={removeCard} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItemPart
