export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
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

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload

      const productIndex = state.findIndex(item => item.id === id)

      if (productIndex >= 0) {
        const newState = [...state]
        const updatedProduct = { ...newState[productIndex] }

        if (updatedProduct.quantity > 1) {
          updatedProduct.quantity -= 1
          newState[productIndex] = updatedProduct
        } else {
          newState.splice(productIndex, 1)
        }
        updateLocalStorage(newState)
        return newState
      }
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }
  return state
}
