import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // Checkear si el producto está ya en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // una forma sería usando structureClone, hay que hacer una copia
      // profunda ya que los arrays y objetos en js apuntan a una referencia
      // entonces modificaríamos el objeto original desde la nueva constante
      // lo cual modificaríamos el state (cart) antes de hacer el setCart
      // y react no detectaría los cambios para rerenderizar el componente
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // si el producto no está en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const decreaseQuantityFromCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    const productQuantity = product.quantity
    const newCart = structuredClone(cart)

    if (productQuantity > 1) {
      newCart[productInCartIndex].quantity -= 1
      return setCart(newCart)
    }

    const filterCart = newCart.filter(item => item.id !== product.id)
    setCart(filterCart)
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = product => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantityFromCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
