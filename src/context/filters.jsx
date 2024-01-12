import React, { createContext, useState } from 'react'

// Creacte Context
export const FiltersContext = createContext()

// Crear the provider for the project
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(
    {
      category: 'all',
      minPrice: 0
    }
  )
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
