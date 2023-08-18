import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className="container">
        <h1 className="header">{count}</h1>
        <div className="btn_grp">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>
  )
}

export default App