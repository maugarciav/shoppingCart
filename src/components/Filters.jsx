import React, { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFiilterID = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>From: ${filters.minPrice}</label>
        <input
          type= 'range'
          id = {minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>

      <div>
        <label htmlFor={categoryFiilterID}>Category</label>
        <select id={categoryFiilterID} onChange={handleChangeCategory}>
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
