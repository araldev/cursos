import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // No meter dentro de un condicional un Hook, el condicional dentro del Hook
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      globalThis.addEventListener('pointermove', handleMove)
    }
    // useEffect podemos devolver una función donde devolver como limpiar el efecto
    // Se ejecuta cuando se desmonta el componente y cada vez que
    // cambia la dependencia antes de ejecutar de nuevo el efecto.
    return () => { globalThis.removeEventListener('pointermove', handleMove) }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#000',
        border: '2px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => { setMounted(!mounted) }}>Toggle mounted FollowMouse component</button>
    </main>
  )
}

export default App
