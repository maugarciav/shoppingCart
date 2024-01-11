import React, { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'

function App () {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState(
    {
      category: 'all',
      minPrice: 0
    }
  )

  const filterProducts = (products) => {
    return products.filter(products => {
      return (
        products.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          products.category === filters.category
        )
      )
    })
  }

  const filterProduct = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filterProduct}/>
    </>
  )
}

export default App
