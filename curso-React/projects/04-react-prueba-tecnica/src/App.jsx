import './App.css'

import useCatFact from '../hooks/useCatFact.js'
import useCatImage from '../hooks/useCatImage.js'

export default function App () {
  const { fact, factError, loadFact } = useCatFact()
  const { imageUrl, imageError } = useCatImage({ fact })

  return (
    <>
      <h1>App de Gatitos</h1>

      <button onClick={loadFact}>Get new fact</button>
      {factError && <p style={{ color: 'red' }}>❌ {factError}</p>}
      {fact && <p>{fact}</p>} {/* <------ renderizado condicional */}

      {imageError && <p style={{ color: 'red' }}>❌ {imageError}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </>
  )
}
