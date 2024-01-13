import React from 'react'
import './Footer.css'
import reactLogo from '../assets/react.svg'

export function Footer () {
  return (
    <footer className='footer'>
      <h4>Shopping cart -  <span>@maugarciav</span><img src={reactLogo} alt="React Logo" /></h4>
      <h5>Shopping cart using useContext and useReducer</h5>

    </footer>
  )
}
