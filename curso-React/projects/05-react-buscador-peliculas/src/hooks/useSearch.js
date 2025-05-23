import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search !== ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con números')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 carácteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
