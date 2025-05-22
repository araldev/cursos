import { useId } from 'react'
import { CartIcon, ClearCartIcon, AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem ({ product }) {
  const { addToCart, decreaseQuantityFromCart } = useCart()
  return (
    <li>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>

      <footer>
        <small>
          {product.quantity}
        </small>

      </footer>

      <button style={{ background: 'green' }} onClick={() => addToCart(product)}>
        <AddToCartIcon />
      </button>
      <button style={{ background: 'red' }} onClick={() => decreaseQuantityFromCart(product)}>
        <RemoveFromCartIcon />
      </button>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => {
              return (
                <CartItem key={product.id} product={product} />
              )
            })
          }
        </ul>

        <button style={{ background: 'red' }} onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>

    </>
  )
}
