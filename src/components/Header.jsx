import React from 'react'
import { Filters } from './Filters'

export function Header ({ changeFilters }) {
  return (
    <header>
      <h1>React Shop 🛒 </h1>
      <Filters changeFilters={changeFilters}/>
    </header>
  )
}
