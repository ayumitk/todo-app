import React from 'react'
import { List, ListItem, ListItemIcon, Checkbox } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const Todos = ({ todos }) => {
  const yay = "You have no todo's left, yay!"

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
