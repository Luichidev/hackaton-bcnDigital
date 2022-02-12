import React, { useState } from 'react'
import { Children } from 'react/cjs/react.production.min'

const Context = React.createContext({})

export function DataContextProvider({ children }) {
  const [data, setData] = useState([])
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  )
}

export default Context
