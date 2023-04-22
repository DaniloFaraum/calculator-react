import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
//import math from 'mathjs';
const math = require("mathjs")

export function App() {
  const [expression, setExpression] = useState("")

  const addNumber = (e: any) =>{
   // if(expression.length<=17){
      setExpression(expression+e.currentTarget.id)
      console.log(e.currentTarget.id);
      console.log(expression.length);      
   // }
  }

  const clear = () =>{
    setExpression("")
  }

  const result = () =>{
    if(expression!==""){
      try{
        setExpression(math.evaluate(expression))
      }
      catch{
        console.log(expression);
      }
    }
  }

  return (
    <div className="App">
      <div className='top'>
      <div className='result'>{expression}</div>
      <Button symbol='C' style='clear' onClick={clear}></Button>
      </div>
      <div className="buttons">
        <Button symbol="9" onClick={addNumber}></Button>
        <Button symbol="8" onClick={addNumber}></Button>
        <Button symbol="7" onClick={addNumber}></Button>
        <Button symbol="/" onClick={addNumber}></Button>
        <Button symbol="4" onClick={addNumber}></Button>
        <Button symbol="5" onClick={addNumber}></Button>
        <Button symbol="6" onClick={addNumber}></Button>
        <Button symbol="*" onClick={addNumber}></Button>
        <Button symbol="1" onClick={addNumber}></Button>
        <Button symbol="2" onClick={addNumber}></Button>
        <Button symbol="3" onClick={addNumber}></Button>
        <Button symbol="-" onClick={addNumber}></Button>
        <Button symbol="0" onClick={addNumber}></Button>
        <Button symbol="." onClick={addNumber}></Button>
        <Button symbol="=" style='equals' onClick={result}></Button>
        <Button symbol="+" onClick={addNumber}></Button>
      </div>
    </div>
  );
}

export default App;
