import React, { useContext } from 'react'
import Store from '../store/context'
import { TodoHeader } from './TodoHeader'

export default function TodoList() {
  const { state, dispatch } = useContext(Store)

  const numberOfCount = (count) => {
    return count > 1 ? `현재 해야할일은 ${count}개 입니다.` : `현재 할일이 하나 있습니다.`
  }

  const isDone = (element) => {
    dispatch({
      type: 'COMPLETE',
      payload: element
    })
  }
  let header =
    (state.todos.length === 0) ? (
      <h5>모든 해야할일을 끝냈습니다 쉬셔도 좋습니다.</h5>
    ) : (
      <TodoHeader>
        <span className="float-right">{numberOfCount(state.todos.length)}</span>
      </TodoHeader>
    )
    return (
      <>
        <div className="list-header">
          {header}
        </div>
        <ul className="list-group">
          {state.todos.map((element) => (
            <li key={element} className="list-group-item">
              {element}
              <button 
                className="btn"
                onClick={isDone(element)}>
                완료
              </button>
            </li>
          ))}
        </ul>
      </>
    )
}