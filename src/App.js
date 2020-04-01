import React, { Component } from 'react'
import { CssBaseline, Container, Typography, List, ListItem, ListItemIcon, Checkbox, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { Delete } from '@material-ui/icons'
import { deleteTodo } from './actions/todoActions'

class App extends Component {
  handleClick = (id) => {
    // console.log(id)
    this.props.deleteTodo(id)
  }

  render() {
    // console.log(this.props)
    const { todos } = this.props

    const todoList = todos.length ? (
      todos.map((todo) => (
        <ListItem key={todo.id} style={{ display: 'flex' }}>
          <ListItemIcon>
            <Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
          </ListItemIcon>
          {todo.title}
          <Button variant="contained" style={{ marginLeft: 'auto' }} onClick={(id) => this.handleClick(todo.id)}>
            <Delete />
            Delete
          </Button>
        </ListItem>
      ))
    ) : (
      <Typography variant="body1" component="p" align="center">
        You have no todo's left, yay!
      </Typography>
    )

    return (
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h2" component="h1" align="center">
            Todo's
          </Typography>
          <List>{todoList}</List>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch(deleteTodo(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
