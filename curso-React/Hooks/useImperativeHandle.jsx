// 1. `useImperativeHandle` se usa en conjunto con `forwardRef` y `useRef` para
//    personalizar el valor de instancia que se expone a los componentes padres cuando
//    usan una ref en un componente hijo.
// 2. Permite a un componente padre llamar métodos específicos o acceder a propiedades de un componente hijo
//    de forma imperativa, sin necesidad de pasar props.
// 3. Útil en escenarios muy específicos donde la manipulación directa del DOM o la exposición de
//    una API limitada del hijo sea necesaria, como para integrar con bibliotecas de terceros
//    o animaciones. Se debe usar con moderación para mantener la naturaleza declarativa de React.

import { useRef, forwardRef, useImperativeHandle, useState } from 'react'

// Componente hijo que expone métodos a través de una ref
// 1. `forwardRef` es necesario para que el componente hijo pueda recibir una ref del padre.
const CustomInput = forwardRef(({ label }, ref) => {
  const inputEl = useRef(null)
  const [value, setValue] = useState('')

  // 2. `useImperativeHandle` personaliza el valor que se expone al `ref` del padre.
  //    Aquí, el padre puede acceder a los métodos `focusInput` y `clearInput`.
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputEl.current) {
        inputEl.current.focus()
      }
    },
    clearInput: () => {
      setValue('')
      if (inputEl.current) {
        inputEl.current.focus()
      }
    },
    // También podemos exponer propiedades si es necesario
    getCurrentValue: () => value
  }), [value]) // Dependencia: la API expuesta se actualiza si `value` cambia

  return (
    <div>
      <label>{label}: </label>
      <input
        type='text'
        ref={inputEl}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ margin: '5px' }}
      />
    </div>
  )
})

export function ParentComponentWithImperativeHandle () {
  // Creamos una ref para el componente hijo `CustomInput`
  const myInputRef = useRef(null)

  const handleFocusClick = () => {
    // Llamamos al método expuesto por el componente hijo a través de la ref
    if (myInputRef.current) {
      myInputRef.current.focusInput()
    }
  }

  const handleClearClick = () => {
    if (myInputRef.current) {
      myInputRef.current.clearInput()
    }
  }

  const handleGetValueClick = () => {
    if (myInputRef.current) {
      alert(`Valor actual del input: ${myInputRef.current.getCurrentValue()}`)
    }
  }

  return (
    <div>
      <h2>Ejemplo de useImperativeHandle</h2>
      <CustomInput label='Mi Input Especial' ref={myInputRef} />
      <button onClick={handleFocusClick}>Enfocar Input</button>
      <button onClick={handleClearClick}>Limpiar Input</button>
      <button onClick={handleGetValueClick}>Obtener Valor</button>
      <p>
        Este ejemplo muestra cómo el componente padre puede llamar métodos
        definidos en el componente hijo `CustomInput` utilizando `useImperativeHandle` y `forwardRef`.
      </p>
    </div>
  )
}
