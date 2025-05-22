// 1. `useState` es el hook más fundamental para manejar el estado en componentes funcionales de React.
// 2. Devuelve un par de valores: el estado actual y una función para actualizarlo.
// 3. Cuando la función de actualización es llamada, React re-renderiza el componente con el nuevo estado.
// 4. El valor inicial del estado se pasa como argumento a `useState` y solo se usa en el renderizado inicial.
import { useState } from 'react'

export function Counter () {
  const [count, setCount] = useState(0) // Inicializamos el estado 'count' a 0

  const increment = () => {
    setCount(count + 1) // Actualizamos el estado de 'count'
  }

  const decrement = () => {
    setCount(count - 1) // Actualizamos el estado de 'count'
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  )
}
