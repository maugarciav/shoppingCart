import React from 'react'
import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
// import reactLogo from '../assets/react.svg'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* <h4>Shopping cart -  <span>@maugarciav</span><img src={reactLogo} alt="React Logo" /></h4>
      <h5>Shopping cart using useContext and useReducer</h5> */}

      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}
