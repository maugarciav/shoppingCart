import React, { useState } from 'react'
import './Filters.css'

export function Filters ({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    changeFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">From:  ${minPrice}</label>
        <input
          type= 'range'
          id = 'price'
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='groceries'>Groceries</option>
          <option value='home-decoration'>Home decoration</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>

    </section>
  )
}
