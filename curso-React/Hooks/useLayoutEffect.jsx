// 1. `useLayoutEffect` es muy similar a `useEffect`, pero se dispara de forma síncrona
//    inmediatamente después de que React ha realizado todas las mutaciones del DOM.
// 2. Esto significa que se ejecuta *antes* de que el navegador tenga la oportunidad de pintar
//    la pantalla. Es útil para realizar mediciones del DOM (como el tamaño o la posición de un elemento)
//    y luego hacer cambios en el DOM basados en esas mediciones, sin que el usuario perciba un "parpadeo" visual.
// 3. Úsalo con precaución, ya que su ejecución síncrona puede bloquear el renderizado del navegador
//    si las operaciones dentro de él son demasiado costosas. En la mayoría de los casos, `useEffect` es suficiente.

import { useState, useRef, useLayoutEffect } from 'react'

export function LayoutEffectExample () {
  const [width, setWidth] = useState(0)
  const boxRef = useRef(null)

  // 1. `useLayoutEffect` se ejecuta antes de que el navegador pinte.
  //    Esto asegura que cualquier ajuste de estilo basado en las dimensiones se aplique
  //    antes de que el usuario vea el resultado.
  useLayoutEffect(() => {
    if (boxRef.current) {
      const currentWidth = boxRef.current.offsetWidth
      console.log('useLayoutEffect: Ancho del div:', currentWidth)
      // Si el ancho es muy pequeño, lo ajustamos para que siempre sea al menos 100px
      if (currentWidth < 100 && width !== 100) {
        setWidth(100) // Esto causa un re-render, pero useLayoutEffect asegura que no haya un parpadeo
      }
    }
  }, [width]) // Se re-ejecuta si el 'width' del estado cambia

  return (
    <div>
      <h2>Ejemplo de useLayoutEffect</h2>
      <p>Ancho del div: {width}px</p>
      <div
        ref={boxRef}
        style={{
          width: `${width}px`,
          height: '50px',
          backgroundColor: 'lightblue',
          border: '1px solid blue',
          margin: '20px 0'
        }}
      />
      <button onClick={() => setWidth(prev => prev + 10)}>Aumentar Ancho</button>
      <button onClick={() => setWidth(prev => Math.max(0, prev - 10))}>Disminuir Ancho</button>
      <button onClick={() => setWidth(50)}>Establecer 50px</button>
      <p>
        Intenta establecer un ancho muy pequeño (ej. 50px) y verás cómo `useLayoutEffect` lo ajusta
        inmediatamente a 100px sin "parpadeo".
      </p>
    </div>
  )
}
