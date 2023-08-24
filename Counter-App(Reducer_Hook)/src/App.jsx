import { useReducer } from 'react'
import './App.css'

function reducer(currState, action) {
  switch(action){
    case 'decrement' : return {count: currState.count - 1}
    case 'reset' : return {count: 0}
    case 'increment' : return {count: currState.count + 1}
  }
}

function App() {
  let [state, dispatcher] = useReducer(reducer, {count:0})

  const decrementHandler = () => {
    dispatcher('decrement')
  }
  const resetHandler = () => {
    dispatcher('reset')
  }
  const incrementHandler = () => {
    dispatcher('increment')
  }
  
  return (
    <>
      <div className="container">
        <h1 className="header">{state.count}</h1>
        <div className="btn_grp">
          <button onClick={decrementHandler}>-</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </>
  )
}

export default App