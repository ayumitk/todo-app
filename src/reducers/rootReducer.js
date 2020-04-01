const initState = {
  todos: [
    {
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      id: 3,
      title: 'fugiat veniam minus',
      completed: true,
    },
  ],
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_TODO') {
    const newTodos = state.todos.filter((todo) => action.id !== todo.id)
    return {
      ...state,
      todos: newTodos,
    }
  }

  return state
}

export default rootReducer
