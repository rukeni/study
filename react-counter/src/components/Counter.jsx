import React from 'react';

function Counter() {
  
  const body = document.body
  const regex = /^[1-9][0-9]+/g
  let [count, setCount] = React.useState(0)
  const [blue, setBlue] = React.useState(0)
  const [red, setRed] = React.useState(0)
  const [green, setGreen] = React.useState(0)
  let isNumber = regex.test(count)
  const NotNumber = () => {
    return (
      <p>{isNumber}</p>
    );
  }
  const color = {
    color: count<0 ? 'red' : 'blue'
  }
  const background = {
    backgroundColor: `rgb(${red},${green},${blue})`
  }
  const onIncrement = (e) => {
    e.preventDefault()
    setCount(count+1)
    
  }
  const onDecrement = (e) => {
    e.preventDefault()
    setCount(count-1)
  }

  const onChange = (e) => {
    e.preventDefault()
      setCount(count = e.target.value)
  }

  return (
    <div className="Counter">
      <div id="react-highlight" style={color}>react</div>
      <label>숫자 입력 값 : <h1 style={color}>{count}</h1> </label>
      <input value={count} onChange={onChange} type="text"/>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <NotNumber/>
    </div>
  )
}

export default Counter
