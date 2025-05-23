import { useState, useEffect } from 'react'
import { initialProducts } from '../services/products.js'

export function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    initialProducts().then(data => setProducts(data))
  }, [])

  return { products }
}
