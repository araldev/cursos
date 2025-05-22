// 1. `useEffect` permite realizar "efectos secundarios" en componentes funcionales, como la obtención de datos,
//    suscripciones o la manipulación manual del DOM.
// 2. Se ejecuta después de cada renderizado del componente por defecto.
// 3. Se puede controlar cuándo se ejecuta el efecto pasando un array de dependencias como segundo argumento.
//    - Si el array está vacío (`[]`), el efecto se ejecuta solo una vez después del primer renderizado (similar a `componentDidMount`).
//    - Si el array contiene valores, el efecto se ejecuta cuando esos valores cambian.
//    - Si no se pasa el array, el efecto se ejecuta en cada renderizado (similar a `componentDidUpdate`).
// 4. Puede devolver una función de limpieza, que se ejecuta antes de que el componente se desmonte o antes de que el efecto se vuelva a ejecutar.

import { useState, useEffect } from 'react'

export function PostFetcher () {
  const [postId, setPostId] = useState(1)
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 1. Este efecto se ejecuta cada vez que 'postId' cambia.
    // 2. Simula una llamada a una API para obtener un post.
    setLoading(true)
    setError(null)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setPost(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })

    // 3. Función de limpieza: se ejecuta antes de que el componente se desmonte o antes de que el efecto se vuelva a ejecutar.
    //    En este caso, no hay una limpieza explícita necesaria para una simple llamada `Workspace`,
    //    pero es útil para desuscribirse de eventos o limpiar timers.
    return () => {
      console.log('Limpiando efecto para postId:', postId)
      // Aquí se podría cancelar una petición fetch si fuera necesario,
      // por ejemplo, usando un AbortController.
    }
  }, [postId]) // Dependencia: el efecto se re-ejecutará si 'postId' cambia

  const goToNextPost = () => {
    setPostId(prevId => prevId + 1)
  }

  const goToPrevPost = () => {
    setPostId(prevId => Math.max(1, prevId - 1)) // Asegura que el ID no sea menor que 1
  }

  if (loading) return <p>Cargando post...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!post) return <p>No se encontró el post.</p>

  return (
    <div>
      <h2>Detalles del Post (ID: {postId})</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={goToPrevPost} disabled={postId === 1}>Post Anterior</button>
      <button onClick={goToNextPost}>Siguiente Post</button>
    </div>
  )
}
