import React from 'react'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - ${product.price} <br/>
              <small>{product.description}</small>
            </div>
            <div>
              <button className='AddToCartIcon' onClick={() => addToCart(product)}>
                <AddToCartIcon/ >
              </button >
              {isProductInCart &&
                <button className='RemoveFromCartIcon' onClick={() => removeFromCart(product)}>
                  <RemoveFromCartIcon/>
              </button >
              }
            </div>
          </li>
          )
        })}
      </ul>

    </main>
  )
}
