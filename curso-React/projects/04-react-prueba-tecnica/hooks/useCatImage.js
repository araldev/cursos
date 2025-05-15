import { useState, useEffect, useRef } from 'react'
import { getRandomImage } from '../services/images'

// para recuperar la imágen cada vez que tenemos un fact nuevo
export default function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageError, setImageError] = useState(null)
  const lastFact = useRef(null)

  useEffect(() => {
    if (!fact || fact === lastFact.current) return

    lastFact.current = fact

    getRandomImage({ fact })
      .then(newImage => {
        setImageUrl(newImage)
        setImageError(null)
      })
      .catch(error => setImageError(error))
  }, [fact])

  return { imageUrl, imageError }
}
