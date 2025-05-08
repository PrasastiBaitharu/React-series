import { useState } from 'react'
import './count.css'

function Count() {
  let [count, setCount] = useState(0)

  function increaseCount(){
    count = count + 1;
    setCount(count)
  }

  function decreaseCount(){
    if(count>0){
      count = count-1;
      setCount(count)
    }else{
      setCount(0);
    }
  }

  function double(){
    count = count * 2;
    setCount(count);
  }

  function reset(){
    count = 0;
    setCount(count);
  }

  return (
    <>
      {
        (count>=10?<h1 style={{color:"red" , fontSize:"40px"  }}>{count}</h1>:<h1 style={{color:"black" , fontSize:"40px" }}>{count}</h1>)
      }
      {
        (count === 0? <p>Start Counting!</p>:<p>Keep going!</p>)
      }
      
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={double}>Double</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Count;
