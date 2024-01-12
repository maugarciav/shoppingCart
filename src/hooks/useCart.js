import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export function useCart () {
  const cart = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('userCart must be used within a CartProvider')
  }
  return cart
}
