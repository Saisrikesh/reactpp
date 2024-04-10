import './App.css'
import { useState } from 'react'

function Counter(){

  let [counter, setcounter] = useState(5)

  const increase = () => {
    if(counter==20){
      return
    }
    setcounter(counter+1)
    setcounter(counter+1)
    setcounter(counter+1)
    setcounter(counter+1)
  }

  const decrease = () => {
    if(counter==0){
      return
    }
    setcounter(counter-1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>Value: {counter}</h1>
      <br></br>
      <button onClick={increase}>INC</button>
      <br></br>
      <button onClick={decrease}>DEC</button>
    </>
  )
}

export default Counter