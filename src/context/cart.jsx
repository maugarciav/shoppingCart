import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productCartIndex = cart.findIndex(item => item.id === product.id)

    if (productCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => { setCart([]) }

  const removeFromCart = (product) => {
    const productIndex = cart.findIndex(item => item.id === product.id)

    if (productIndex >= 0) {
      const newCart = [...cart]
      const updatedProduct = { ...newCart[productIndex] }

      if (updatedProduct.quantity > 1) {
        updatedProduct.quantity -= 1
        newCart[productIndex] = updatedProduct
      } else {
        newCart.splice(productIndex, 1)
      }
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
