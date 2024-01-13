import React, { createContext, useReducer } from 'react'

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) { // Cambiado de action.type a actionType
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
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
        return newState
      }
    }

    case 'CLEAR_CART': {
      return initialState
    }
  }
  return state
}

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
