import React, { useContext, useState, useRef, useEffect } from 'react'
import Store from '../store/context'

export default function TodoForm() {
  const { dispatch } = useContext(Store)
  const [todo, setTodo] = useState('')
  const Input = useRef()
  const handleTodoChange = (e) => {
    setTodo(e.target.value)
  }

  const handleTodoAdd = () => {
    dispatch({ type: "ADD_TODO", payload: todo})
    setTodo('')
  }

  const handleSubmitForm = (e) => {
    if (e.keyCode === 13) handleTodoAdd()
  }

  useEffect(() => {
    Input.current.focus()
  })

  
  
  return (
    <>
      <div className="inputs">
        <input className="form-control"
                value={todo}
                ref={Input}
                placeholder="해야할 일이 무엇입니까?"
                onKeyUp={handleSubmitForm}
                onChange={handleTodoChange}/>
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleTodoAdd}>
            추가
          </button>
        </div>
      </div>
    </>
  )
}