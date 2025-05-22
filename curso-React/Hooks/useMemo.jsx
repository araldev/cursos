// 1. `useMemo` es un hook para optimizar el rendimiento. Memoiza (almacena en caché)
//    el resultado de una función y solo lo recalcula si sus dependencias cambian.
// 2. Es útil para evitar recálculos costosos en cada renderizado cuando los datos de entrada
//    no han cambiado.
// 3. Recibe dos argumentos: una función que devuelve el valor que queremos memoizar, y un array de dependencias.
// 4. ¡Úsalo con moderación! Solo cuando tengas un cuello de botella de rendimiento, ya que la memoización
//    también tiene un costo.

import { useState, useMemo } from 'react'

// Función costosa que simula un cálculo intensivo
const calculateFactorial = (n) => {
  console.log(`Calculando factorial para: ${n}`)
  if (n < 0) return -1
  if (n === 0) return 1
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

export function FactorialCalculator () {
  const [number, setNumber] = useState(1)
  const [otherState, setOtherState] = useState(0)

  // 1. `useMemo` memoiza el resultado de `calculateFactorial`.
  // 2. El factorial solo se recalculará si el 'number' cambia.
  const factorial = useMemo(() => calculateFactorial(number), [number])

  return (
    <div>
      <h2>Calculador de Factorial con useMemo</h2>
      <p>
        El factorial es: <strong>{factorial}</strong>
      </p>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        min='0'
      />
      <p>
        Otro estado (cambiarlo no recalcula el factorial): <strong>{otherState}</strong>
      </p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Incrementar Otro Estado
      </button>
      <p>
        Observa la consola: "Calculando factorial para..." solo aparece cuando el número cambia,
        no cuando el "Otro Estado" cambia.
      </p>
    </div>
  )
}
