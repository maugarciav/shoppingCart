import React from 'react'
import './Footer.css'
import { useFilters } from '../hooks/useFilters'
// import reactLogo from '../assets/react.svg'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {/* <h4>Shopping cart -  <span>@maugarciav</span><img src={reactLogo} alt="React Logo" /></h4>
      <h5>Shopping cart using useContext and useReducer</h5> */}

      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
