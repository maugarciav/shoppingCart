import React, { createContext } from 'react'

// Creacte Context
export const FilterContext = createContext()

// Crear the provider for the project
export function FiltersProvider ({ children }) {
  return (
    <FilterContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
