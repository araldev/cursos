// 1. `useRef` devuelve un objeto ref mutable cuya propiedad `.current` es inicializada
//    con el argumento pasado y se mantiene la misma referencia entre renders.
// 2. Es comúnmente usado para acceder directamente a un elemento DOM o una instancia de componente.
// 3. También es útil para almacenar cualquier valor mutable que no cause un re-renderizado
//    cuando cambia (a diferencia de `useState`).
// 4. A diferencia de un estado, actualizar `useRef` no dispara un re-renderizado del componente.
// 5. Se suele usar de flag para almacenar un valor mutable en cada renderizado sin que cambie,
// la diferencia con poner una variable fuera del componente es que con useRef si hay más
// instancias del componente no comparten la misma variable sino que cada uno tiene la suya.

import { useRef, useState, useEffect } from 'react'

export function FocusInput () {
  // 1. Creamos una referencia para el elemento input.
  const inputRef = useRef(null)

  const focusTheInput = () => {
    // 2. Accedemos al elemento DOM directamente a través de `inputRef.current`.
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.style.backgroundColor = '#e6ffe6' // Ejemplo de manipulación directa del DOM
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.style.backgroundColor = '' // Vuelve al color normal
        }
      }, 1000)
    }
  }

  return (
    <div>
      <h2>Ejemplo de useRef: Enfocar Input</h2>
      <input type='text' ref={inputRef} placeholder='Haz clic en el botón para enfocarme' />
      <button onClick={focusTheInput}>Enfocar Input</button>
      <p>
        `useRef` es útil para interactuar directamente con elementos del DOM o para
        almacenar valores que persisten entre renders sin causar re-renderizados.
      </p>
    </div>
  )
}

// 1. Además de acceder a elementos DOM, `useRef` también se puede usar para mantener cualquier valor mutable
//    que persista entre renders sin causar re-renderizados.
// 2. Es útil para almacenar contadores, IDs de timers, o cualquier dato que necesite ser el mismo entre renders
//    pero no debe causar un re-renderizado cuando se actualiza.

export function TimerExample () {
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)
  // 1. Usamos useRef para almacenar el ID del intervalo.
  //    No queremos que un cambio en este ID cause un re-renderizado.
  const intervalIdRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000)
    } else {
      // 2. Limpiamos el intervalo usando la referencia.
      clearInterval(intervalIdRef.current)
    }

    // Función de limpieza para asegurar que el intervalo se detenga cuando el componente se desmonte
    return () => clearInterval(intervalIdRef.current)
  }, [isRunning]) // El efecto se ejecuta cuando `isRunning` cambia

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setSeconds(0)
    // También asegúrate de limpiar el intervalo si el usuario hace reset mientras corre
    clearInterval(intervalIdRef.current)
  }

  return (
    <div>
      <h2>Ejemplo de useRef: Contador Mutable</h2>
      <p>Tiempo transcurrido: {seconds} segundos</p>
      <button onClick={startTimer} disabled={isRunning}>Iniciar</button>
      <button onClick={stopTimer} disabled={!isRunning}>Detener</button>
      <button onClick={resetTimer}>Reiniciar</button>
      <p>
        El `intervalIdRef` almacena la referencia al ID del `setInterval`
        sin provocar re-renderizados cada vez que se actualiza.
      </p>
    </div>
  )
}
