import {Component} from 'react'

import TodoItemPart from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todo: initialTodosList}

  deleteCard = id => {
    console.log(id)
    const {todo} = this.state
    const removes = todo.filter(each => each.id !== id)
    this.setState({todo: removes})
  }

  render() {
    const {todo} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todo.map(each => (
              <TodoItemPart
                todoItem={each}
                key={each.id}
                removingCard={this.deleteCard}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
