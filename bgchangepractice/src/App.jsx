import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('orange')

  return (
    <>
    <div
    className='d-flex justify-content-center align-items-end'
    style={{backgroundColor: color, width: '100vw', height:'100vh'}}>

      <div
      style={{backgroundColor:'white', width: '100vw', padding: '10px', margin: '10px'}} 
      className='d-flex justify-content-between rounded'>

        <button
        onClick={() => setColor('green')}
        style={{backgroundColor: "green", color: "white"}}>green</button>

        <button
        onClick={() => setColor('red')}
        style={{backgroundColor: "red", color: "white"}}>red</button>

        <button
        onClick={() => setColor('blue')}
        style={{backgroundColor: "blue", color: "white"}}>blue</button>

        <button
        onClick={() => setColor('yellow')}
        style={{backgroundColor: "yellow", color: "white"}}>yellow</button>

        <button
        onClick={() => setColor('purple')}
        style={{backgroundColor: "purple", color: "white"}}>purple</button>

        <button
        onClick={() => setColor('pink')}
        style={{backgroundColor: "pink", color: "white"}}>pink</button>

      </div>

    </div>
    </>
  );
}

export default App;