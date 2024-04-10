import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('orange')

  return (
    <>
      <div 
      className='d-flex justify-content-center align-items-end'
      style={{backgroundColor: color, width: '100vw', height: '100vh'}}>

        <div
        className='d-flex justify-content-between'
        style={{backgroundColor: 'black', margin: '50px', width:'100vw'} }>

          <button
          onClick={() => setColor('red')}
          style={{backgroundColor: 'red', color: 'white'}}>red
          </button>

          <button
          onClick={() => setColor('yellow')}
          style={{backgroundColor: 'yellow', color: 'white'}}>yellow
          </button>

          <button
          onClick={() => setColor('pink')}
          style={{backgroundColor: 'pink', color: 'white'}}>pink
          </button>

          <button
          onClick={() => setColor('green')}
          style={{backgroundColor: 'green', color: 'white'}}>green
          </button>
          
        </div>
      </div>
    </>
  );
}

export default App;