import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const handleclick = () => {
    setCount(count + 1);
  };
  const handleclick1 = () => {
    setCount(count - 1);
  };
return (
  <>
    <button onClick={handleclick}>the count is {count}</button>
    <button onClick={handleclick1}>the count is {count}</button>

  </>
);
  
}



export default App
