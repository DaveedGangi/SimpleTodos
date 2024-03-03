// Write your code here

import {useState} from 'react'

import './index.css'

const TodoItemPart = props => {
  const {
    todoItem,
    removingCard,
    changeToEditTodo,
    changeToSaveTodo,
    edit,
    changeStyles,
  } = props

  const {title, id, checking} = todoItem

  const [textField, setTextField] = useState(title)

  const removeCard = () => {
    removingCard(id)
    console.log(id)
  }

  const changeToSaves = () => {
    changeToSaveTodo(id)
  }

  const changeToEdits = () => {
    changeToEditTodo(id)
  }

  const userValueChange = event => {
    setTextField(event.target.value)
  }

  const changeStyling = () => {
    changeStyles(id)
  }

  return (
    <li className="EachTodo">
      <input type="checkbox" onClick={changeStyling} />
      {edit ? (
        <input
          className="inputUser"
          onChange={userValueChange}
          type="text"
          value={textField}
        />
      ) : (
        <p className={checking ? 'textDecorate' : 'eachTodo'}>{textField}</p>
      )}

      <div className="ForButton">
        <div>
          <button className="deleteButton" onClick={removeCard} type="button">
            Delete
          </button>
        </div>
        <div>
          {edit ? (
            <button className="Save" type="button" onClick={changeToEdits}>
              Save
            </button>
          ) : (
            <button className="Edit" type="button" onClick={changeToSaves}>
              Edit
            </button>
          )}
        </div>
      </div>
    </li>
  )
}

export default TodoItemPart
