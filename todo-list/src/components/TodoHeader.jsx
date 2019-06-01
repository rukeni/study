import React from 'react'

export const TodoHeader = (props) => {
  return (
    <>
      <div className="header">
        <h1>할일 리스트</h1>
      </div>
      <div className="props">
        {props.children}
      </div>
    </>
  )
}