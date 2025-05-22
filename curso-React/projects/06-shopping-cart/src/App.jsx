import { Header } from './components/Header.jsx'
import { Cart } from './components/Cart.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './conifg.js'
import { CartProvider } from './context/cart.jsx'

export default function App () {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}
