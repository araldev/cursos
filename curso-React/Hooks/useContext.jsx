// 1. `useContext` permite a un componente suscribirse a cambios en un "contexto" de React.
// 2. El Context API es una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
// 3. Es útil para datos "globales" como el tema actual, la información del usuario autenticado o el idioma preferido.
// 4. Se usa junto con `createContext` (para crear el contexto) y `Context.Provider` (para proveer el valor) y después usarlo.
// 5. Se suele crear una carpeta context y dentro tener nuestros contextos en archivos .jsx
// 6. El contextProvider es un componente
import { createContext, useContext, useState } from 'react'

// - Dentro de la carpeta context:
//  1. Creamos un contexto
export const ThemeContext = createContext()
//  2. Creamos el Provider
export function ThemeContextProvider ({ children }) {
  // De esta manera creamos un estado global, aunque también podríamos hacerlo estático
  const [theme, setTheme] = useState('light')

  return (
  // El valor pasado al `value` prop será accesible por `useContext` en los componentes hijos.
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Componente que usa el contexto para mostrar el tema
function ThemedComponent () {
  // 3. Usamos `useContext` para acceder al valor del contexto.
  const { theme } = useContext(ThemeContext)
  const style = {
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`
  }
  return (
    <div style={style}>
      <p>Este componente está usando el tema: <strong>{theme}</strong></p>
    </div>
  )
}

export function ThemeSwitcher () {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    // 3. El `Provider` envuelve los componentes que necesitan acceder a este contexto.
    <ThemeContextProvider>
      <div>
        <h1>Ejemplo de useContext</h1>
        <button onClick={toggleTheme}>Cambiar Tema ({theme === 'light' ? 'Oscuro' : 'Claro'})</button>
        <ThemedComponent />
      </div>
    </ThemeContextProvider>
  )
}
