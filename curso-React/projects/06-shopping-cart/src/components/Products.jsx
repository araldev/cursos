import './Products.css'
import { AddToCartIcon, ClearCartIcon } from './Icons.jsx'
import { useFilters } from '../hooks/useFilters.js'
import { products as initialProducts } from '../mocks/products.json'
import { useState } from 'react'
import { useCart } from '../hooks/useCart.js'

export function Products () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {filteredProducts.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title} - ${product.price}</strong>
              </div>
              <div>
                <button
                  style={{ background: isProductInCart ? 'red' : 'green' }}
                  onClick={() => {
                    return isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <ClearCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
