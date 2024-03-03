import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import TodoItemPart from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: uuid(),
    title: 'Book the ticket for today evening',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Rent the movie for tomorrow movie night',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Drop the parcel at Bloomingdale',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Order fruits on Big Basket',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Fix the production issue',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Confirm my slot for Saturday Night',
    Edit: false,
    checking: false,
  },
  {
    id: uuid(),
    title: 'Get essentials for Sunday car wash',
    Edit: false,
    checking: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todo: initialTodosList, userText: ''}

  deleteCard = id => {
    console.log(id)
    const {todo} = this.state
    const removes = todo.filter(each => each.id !== id)
    this.setState({todo: removes})
  }

  userValue = event => {
    this.setState({userText: event.target.value})
  }

  addUserInput = () => {
    const {userText} = this.state

    const newTodo = {
      id: uuid(),
      title: userText,
      Edit: false,
      checking: false,
    }

    this.setState(prevState => ({todo: [...prevState.todo, newTodo]}))
    this.setState({userText: ''})
  }

  changeToEdit = id => {
    const {userText} = this.state
    console.log(id)
    this.setState(prevState => ({
      todo: prevState.todo.map(each => {
        if (id === each.id) {
          return {...each, Edit: !each.Edit, title: userText}
        }
        return each
      }),
    }))
  }

  changeToSave = id => {
    console.log(id)
    this.setState(prevState => ({
      todo: prevState.todo.map(each => {
        if (id === each.id) {
          return {...each, Edit: !each.Edit}
        }
        return each
      }),
    }))
  }

  changeToStyle = id => {
    this.setState(prevState => ({
      todo: prevState.todo.map(each => {
        if (id === each.id) {
          return {...each, checking: !each.checking}
        }
        return each
      }),
    }))
  }

  render() {
    const {todo, userText} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>

          <div className="leftSide">
            <div className="addWidth">
              <div>
                <input value={userText} onChange={this.userValue} type="text" />
              </div>
              <div>
                <button
                  className="Add"
                  type="button"
                  onClick={this.addUserInput}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <ul className="ul">
            {todo.map(each => (
              <TodoItemPart
                todoItem={each}
                key={each.id}
                removingCard={this.deleteCard}
                edit={each.Edit}
                changeToEditTodo={this.changeToEdit}
                changeToSaveTodo={this.changeToSave}
                editUserValue={this.userValue}
                changeStyles={this.changeToStyle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
