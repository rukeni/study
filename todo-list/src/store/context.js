import React from 'react'

const Store = React.createContext({
  todos: [
    // Initial Data
    "Buy milk",
    "Some eggs",
    "Go to work",
    "d"
  ]
})

export default Store