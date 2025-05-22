// 1. `useTransition` es un hook de React 18 que permite marcar actualizaciones de estado como "transiciones".
// 2. Las transiciones son actualizaciones de estado que pueden ser interrumpidas. Esto es útil para mantener
//    la UI responsiva durante tareas costosas que podrían bloquear el hilo principal.
// 3. Cuando una actualización se marca como una transición, React puede posponerla si se está
//    ejecutando una actualización más urgente (por ejemplo, entrada de usuario).
// 4. Devuelve un array con dos elementos: `isPending` (un booleano que indica si la transición está pendiente)
//    y `startTransition` (una función que envuelve las actualizaciones que deseas marcar como transición).

import { useState, useTransition } from 'react'

// Simula una lista de elementos generados de forma costosa
const generateExpensiveList = (size) => {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push(`Item #${i + 1}`)
  }
  return list
}

export function TransitionExample () {
  const [inputValue, setInputValue] = useState('')
  const [listSize, setListSize] = useState(0)
  // 1. `useTransition` devuelve `isPending` y `startTransition`.
  const [isPending, startTransition] = useTransition()

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)

    // 2. Envolvemos la actualización de `listSize` en `startTransition`.
    //    Esto la marca como una actualización de baja prioridad.
    startTransition(() => {
      // Intentamos convertir el valor a número, si no es válido, usamos 0.
      const newSize = parseInt(value) || 0
      setListSize(newSize)
    })
  }

  // Generamos la lista usando el `listSize` (que puede ser actualizado de forma tardía)
  const items = generateExpensiveList(listSize)

  return (
    <div>
      <h2>Ejemplo de useTransition</h2>
      <p>Escribe un número en el input para generar una lista grande.</p>
      <input
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Número de elementos'
      />
      {isPending && <p>Cargando lista (transición pendiente)...</p>}
      <p>Número de elementos en la lista: {items.length}</p>
      <ul>
        {items.slice(0, 10).map((item, index) => ( // Mostramos solo los primeros 10 para no sobrecargar la UI
          <li key={index}>{item}</li>
        ))}
        {items.length > 10 && <li>...y {items.length - 10} más</li>}
      </ul>
      <p>
        Intenta escribir números rápidamente. Verás que el input responde
        inmediatamente mientras la generación de la lista (costosa) puede
        retrasarse ligeramente, indicada por el mensaje "Cargando lista...".
      </p>
    </div>
  )
}
