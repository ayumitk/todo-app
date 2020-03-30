import React, { Component } from 'react'
import axios from 'axios'
import { CssBaseline, Container, Typography } from '@material-ui/core'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    todos: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        // handle success
        console.log(res.data)
        this.setState({
          isLoaded: true,
          todos: res.data.slice(0, 10),
        })
      })
      .catch((error) => {
        // handle error
        // console.log(error)
        this.setState({
          isLoaded: true,
          error,
        })
      })
      .finally(() => {
        // always executed
      })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => todo.id !== id)
    // console.log(newTodos)
    this.setState({
      todos: newTodos,
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const { todos } = this.state
    this.setState({
      todos: [...todos, todo],
    })
  }

  render() {
    const { error, isLoaded, todos } = this.state
    return (
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h2" component="h1" align="center">
            Todo's
          </Typography>
          <Todos todos={todos} error={error} isLoaded={isLoaded} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </Container>
      </>
    )
  }
}

export default App
