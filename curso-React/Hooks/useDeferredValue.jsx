// 1. `useDeferredValue` es otro hook de React 18 para optimizar el rendimiento y la UI.
// 2. Permite "diferir" un valor de estado o prop, de modo que React puede priorizar
//    la renderización de la parte urgente de la UI mientras la parte que usa el valor
//    diferido se actualiza en segundo plano.
// 3. Es similar a la desduplicación o "debouncing", pero integrado directamente en el sistema de renderizado de React.
// 4. Útil para escenarios como autocompletado de búsqueda, donde el usuario escribe rápidamente
//    y no queremos que cada pulsación de tecla desencadene una búsqueda costosa inmediatamente.

import { useState, useDeferredValue } from 'react'

// Componente que simula una lista de resultados de búsqueda costosa
const SearchResults = ({ query }) => {
  console.log(`Renderizando SearchResults para query: ${query}`)
  const expensiveCalculation = (q) => {
    const start = performance.now()
    // Simula un cálculo costoso
    for (let i = 0; i < 1000000; i++) {
      // Math.sqrt(i) * Math.sin(i) // <--- Activar para simular el calculo pesado
    }
    const end = performance.now()
    console.log(`Cálculo costoso para "${q}" tomó ${end - start} ms`)

    if (!q) return []
    return Array.from({ length: 5 }, (_, i) => `${q} - Resultado ${i + 1}`)
  }

  const results = expensiveCalculation(query)

  return (
    <div>
      <h3>Resultados de búsqueda para "{query}"</h3>
      {results.length > 0
        ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
          )
        : (
          <p>No hay resultados.</p>
          )}
    </div>
  )
}

export function DeferredValueExample () {
  const [inputQuery, setInputQuery] = useState('')
  // 1. `useDeferredValue` crea una versión "diferida" del `inputQuery`.
  //    React intentará mantener la UI responsiva con `inputQuery` mientras `deferredQuery`
  //    se actualiza en segundo plano.
  const deferredQuery = useDeferredValue(inputQuery)

  const handleChange = (e) => {
    setInputQuery(e.target.value)
  }

  return (
    <div>
      <h2>Ejemplo de useDeferredValue</h2>
      <p>
        Escribe en el input de búsqueda. La parte de la lista de resultados
        se actualizará de forma diferida para mantener la responsividad del input.
      </p>
      <input
        type='text'
        value={inputQuery}
        onChange={handleChange}
        placeholder='Buscar...'
        style={{ width: '300px', padding: '8px' }}
      />
      {/* Pasamos el valor diferido al componente que realiza la operación costosa */}
      <SearchResults query={deferredQuery} />
      <p>
        Observa la consola: el mensaje "Renderizando SearchResults" y "Cálculo costoso"
        aparecerá con un ligero retraso mientras escribes, lo que permite que el input
        permanezca fluido.
      </p>
    </div>
  )
}
