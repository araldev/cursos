// Un custom hook es una función de JavaScript cuyo nombre comienza con "use" y puede llamar a otros Hooks.
// Permiten extraer lógica de estado con efectos secundarios de un componente, para que pueda ser
// reutilizada fácilmente en múltiples componentes.
//
// 1. Reutilización de lógica de estado: Encapsula la lógica común de manejo de estado.
// 2. Abstracción: Oculta la complejidad interna de cómo se maneja el estado.
// 3. Facilidad de prueba: La lógica puede ser probada de forma independiente del componente.
// 4. Nombres descriptivos: El prefijo `use` indica claramente que es un hook.

import { useState, useEffect } from 'react'

// Custom Hook para persistir estado en el localStorage
function useLocalStorage (key, initialValue) {
  // 1. Obtenemos el valor inicial del localStorage o usamos el valor predeterminado.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error al leer de localStorage:', error)
      return initialValue
    }
  })

  // 2. Usamos `useEffect` para sincronizar el estado con localStorage cada vez que `storedValue` cambie.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error('Error al escribir en localStorage:', error)
    }
  }, [key, storedValue]) // Dependencias: key y storedValue

  // 3. Devolvemos el valor almacenado y la función para actualizarlo,
  //    igual que `useState`.
  return [storedValue, setStoredValue]
}

// Ejemplo de uso del custom hook `useLocalStorage`
export function SettingsPanel () {
  // Usamos el custom hook para gestionar el estado del tema y el nombre de usuario
  const [theme, setTheme] = useLocalStorage('appTheme', 'light')
  const [userName, setUserName] = useLocalStorage('userName', 'Invitado')
  const [notificationsEnabled, setNotificationsEnabled] = useLocalStorage('notifications', true)

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev)
  }

  const panelStyle = {
    padding: '20px',
    margin: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#444',
    color: theme === 'light' ? '#333' : '#f0f0f0'
  }

  return (
    <div style={panelStyle}>
      <h2>Panel de Configuración</h2>

      <div>
        <p>Tema actual: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>Cambiar Tema</button>
      </div>

      <div style={{ marginTop: '15px' }}>
        <p>Nombre de usuario: <strong>{userName}</strong></p>
        <input
          type='text'
          value={userName}
          onChange={handleNameChange}
          placeholder='Tu nombre'
        />
      </div>

      <div style={{ marginTop: '15px' }}>
        <p>Notificaciones: <strong>{notificationsEnabled ? 'Activadas' : 'Desactivadas'}</strong></p>
        <button onClick={toggleNotifications}>
          {notificationsEnabled ? 'Desactivar' : 'Activar'} Notificaciones
        </button>
      </div>

      <p style={{ marginTop: '20px', fontSize: '0.9em' }}>
        Cierra y vuelve a abrir el navegador: verás que tus configuraciones se guardan
        gracias al `useLocalStorage` custom hook.
      </p>
    </div>
  )
}
