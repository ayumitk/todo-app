import React from 'react'
import { List, ListItem, ListItemIcon, Checkbox } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const Todos = ({ todos, error, isLoaded, deleteTodo }) => {
  const yay = "You have no todo's left, yay!"

  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} style={{ display: 'flex' }}>
          <ListItemIcon>
            <Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
          </ListItemIcon>
          {todo.title}
          <div style={{ marginLeft: 'auto' }}>
            <Delete />
            delete
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default Todos
