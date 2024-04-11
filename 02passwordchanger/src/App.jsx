import { useCallback, useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState(" ")

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charallowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 0; i < length; i++) {

      let pos = Math.floor(Math.random() * str.length)
      pass += str.charAt(pos)

    }

    setPassword(pass)
    console.log(password)
  }, [length, numberAllowed, charallowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charallowed, numberAllowed, passwordGenerator])

  const copyToClipboard = () => {
    passref.current.select()
    window.navigator.clipboard.writeText(password)
  }

  const passref = useRef(null)

  return (
    <>
      <div
        style={{ backgroundColor: 'black', width: '100vw', height: '100vh', color: 'white' }}>

        <h1>Password Generator</h1>

        <div
          className='d-flex'
        >
          <input type='text' value={password} readOnly ref={passref}></input>
          <button 
          className='btn btn-info'
          onClick={copyToClipboard}>Copy</button>
        </div>

        <div d-flex>
          <input type='range' min={6} max={25} onChange={(e) => setLength(e.target.value)} />Length:{length}
          <input type='checkbox' defaultChecked={numberAllowed} onChange={() => { setNumberallowed((prev) => !prev) }} />Number
          <input type='checkbox' defaultChecked={charallowed} onChange={() => { setCharallowed((prev) => !prev) }} />Char

        </div>

      </div>
    </>
  )
}

export default App
