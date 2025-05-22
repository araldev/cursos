// 1. `useReducer` es una alternativa a `useState` para manejar el estado, especialmente útil para estados complejos
//    que involucran múltiples sub-valores o cuando el próximo estado depende del anterior.
// 2. Es similar al patrón Redux: toma un "reducer" (una función que especifica cómo el estado cambia en respuesta a "acciones")
//    y un estado inicial, y devuelve el estado actual y una función `dispatch` para enviar acciones.
// 3. Favorece la lógica de estado fuera del componente, haciendo el código más predecible y testeable.

import { useReducer } from 'react'

// 1. Definimos un "reducer": una función pura que toma el estado actual y una acción, y devuelve el nuevo estado.
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

export function TodoList () {
  // 2. `useReducer` toma el reducer y el estado inicial, y devuelve el estado actual y la función `dispatch`.
  const [todos, dispatch] = useReducer(todoReducer, []) // Estado inicial: un array vacío de tareas

  const handleAddTodo = (e) => {
    e.preventDefault()
    const text = e.target.elements.todoText.value.trim()
    if (text) {
      // 3. Enviamos una acción al reducer para agregar una nueva tarea.
      dispatch({ type: 'ADD_TODO', payload: text })
      e.target.elements.todoText.value = ''
    }
  }

  return (
    <div>
      <h1>Lista de Tareas con useReducer</h1>
      <form onSubmit={handleAddTodo}>
        <input type='text' name='todoText' placeholder='Añadir nueva tarea' />
        <button type='submit'>Añadir</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })} style={{ marginLeft: '10px' }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
