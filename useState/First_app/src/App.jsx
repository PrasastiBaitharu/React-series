import { useState } from "react"

//Using onclick event
// function App(){
//   function greeting(){
//     console.log("Hello world")
//   }
//   return (
//     <>
//       <h1>Hello</h1>
//       <button onClick={greeting}>Click me</button>
//     </>
//   )
// }


//Trying to increase the value of count
// function App(){
//   let count = 1;
//   function increaseCount(){
//     count = count + 1;
//     console.log(count)
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//     </>
//   )
// }
//But it didn't work as we not used the hook


//There is a useState hook(Hook is used to change the value)
function App(){
  let [count , setCount] = useState(0);
  function increaseCount(){
    count = count+1;
    setCount(count)
  }
  return(
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </>
  )
}


export default App
