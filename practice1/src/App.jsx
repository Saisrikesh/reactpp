import { useState } from "react"




function App() {

  let [counter, setCounter] = useState(5)

  return (
    <>
      <h1>Counter: </h1>
      <h1>Value: {counter}</h1>

      <br></br>
      <br></br>

      <button onClick={() => {
        setCounter(counter+1)
      }}>INC</button>

      <br></br>

      <button onClick={() => {
        setCounter(counter-1)
      }}>DEC</button>

      Counter: {counter}
    </>
  )
}

export default App
