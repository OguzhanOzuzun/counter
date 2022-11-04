import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {


function handleClick() {

  setCounter(counter + 1)

}

function handleClick2() {
  
  setCounter(counter - 1)

}

  const [counter, setCounter] = useState(0)


  
  return (
    <>
<div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick}>Increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
      </div>


    <p>Number: {counter}</p>
    <button onClick={handleClick}>
    Increase
    </button>

    <p></p>

    <button onClick={handleClick2}>
    Decrease
      </button>
      </>

    
  );
}
export default App;
