import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button2 clicked');
  }

  const handleClickpass = (num) => {
    alert(`button clicked and passed ${num}`);
  }

  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert("button3 clicked")}>Click me 3</button>
      <button onClick={() => handleClickpass(5)}>Click to pass 5</button>
    </>
  ) 
}

export default App
