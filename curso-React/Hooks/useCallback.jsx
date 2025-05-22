// 1. `useCallback` es un hook para optimizar el rendimiento, similar a `useMemo`, pero para funciones.
// 2. Memoiza una función, de modo que la función solo se recrea si sus dependencias cambian.
// 3. Es útil cuando pasas callbacks a componentes hijos optimizados con `React.memo` (para evitar re-renders innecesarios)
//    o cuando una función es una dependencia de otro hook como `useEffect` o `useMemo`.
// 4. Recibe dos argumentos: la función a memoizar y un array de dependencias.

import { useState, useCallback, memo } from 'react'

// Componente hijo memoizado con `React.memo`
// Solo se re-renderizará si sus props cambian superficialmente.
const Button = memo(({ onClick, children }) => {
  console.log(`Renderizando botón: ${children}`)
  return <button onClick={onClick}>{children}</button>
})

export function CallbackExample () {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // 1. `handleClick` se recreará en cada render, lo que causaría que `Button` se re-renderice
  //    incluso si su prop `onClick` no cambia lógicamente, porque la referencia de la función cambia.
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // 2. `useCallback` memoiza la función `handleClick`.
  //    Solo se recreará si `count` cambia.
  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]) // Dependencia: la función se recrea si 'count' cambia

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <h2>Ejemplo de useCallback</h2>
      <p>Contador: {count}</p>
      <Button onClick={handleClick}>Incrementar Contador</Button>
      <br />
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        placeholder='Escribe algo aquí...'
      />
      <p>Texto: {text}</p>
      <p>
        Observa la consola: el "Botón: Incrementar Contador" solo se re-renderiza cuando el contador cambia,
        no cuando escribes en el input (a menos que `count` cambie).
      </p>
    </div>
  )
}
