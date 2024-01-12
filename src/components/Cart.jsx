import React, { useId } from 'react'
import './Cart.css'
import { ClearCartIcon, CartIcon } from './Icons'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden/>

      <aside className='cart'>
        <ul>
          <li>
            <img src="https://cdn.dummyjson.com/product-images/1/1.jpg" alt="Iphone" />
            <div>
              <strong>Iphone</strong> - 1499
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}
