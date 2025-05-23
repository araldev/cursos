export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  DECREASE_QUANTITY_FROM_CART: 'DECREASE_QUANTITY_FROM_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStaorage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  // Renombro la propiedad "type" a "actionType" y "payload" a "actionPayload"
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
      // una forma sería usando structureClone, hay que hacer una copia
      // profunda ya que los arrays y objetos en js apuntan a una referencia
      // entonces modificaríamos el objeto original desde la nueva constante
      // lo cual modificaríamos el state (cart) antes de hacer el setCart
      // y react no detectaría los cambios para rerenderizar el componente
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case 'DECREASE_QUANTITY_FROM_CART': {
      const { id } = actionPayload
      const { quantity } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      const clonedState = structuredClone(state)

      if (quantity > 1) {
        clonedState[productInCartIndex].quantity -= 1
        updateLocalStorage(clonedState)
        return clonedState
      }

      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      const emptyCart = []
      updateLocalStorage(emptyCart)
      return emptyCart
    }
  }

  updateLocalStorage(state)
  return state
}

// testeando que el reducer funciona para añadir un producto al carrito
// expect(
//   cartReducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])
