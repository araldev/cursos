import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

// Para recuperar el fact al cargar la página
export default function useCatFact () {
  const [fact, setFact] = useState(null)
  const [factError, setFactError] = useState(null)

  const loadFact = () => {
    return getRandomFact()
      .then(newFact => {
        setFact(newFact)
        setFactError(null) // limpiar error si hubo uno antes
      })
      .catch(error => setFactError(error))
  }
  useEffect(() => {
    loadFact()
  }, [])

  return { fact, factError, loadFact }
}
