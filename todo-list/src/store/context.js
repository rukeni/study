import React from 'react'

const Store = React.createContext({
  todos: [{
      id: 1,
      title: 'Yes or Yes',
      desc: '예스오얼 예스 진심이면 어때',
      isComplete: false
    },
    {
      id: 2,
      title: 'no or no',
      desc: '노오얼 노 가짜면 어때',
      isComplete: false
    },
    {
      id: 3,
      title: 'Yes or no',
      desc: '진실 혹은 거짓',
      isComplete: false
    }
  ]
})

export default Store