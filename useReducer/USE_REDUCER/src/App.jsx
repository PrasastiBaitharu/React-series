import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state,action) {
    if(action.type=="increment"){
      return state+action.payLoad;
    }else{
      return state-action.payLoad
    }
  }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:"increment", payLoad:1})}}>+</button>
      <button onClick={()=>{dispatch({type:"decrement", payLoad:1})}}>-</button>
    </>
  );
}

// import { useState } from "react"

// export default function App(){
//   const[count,setCount] = useState(0);
//   function increment(){
//     setCount(count+1)
//   }
//   function decrement(){
//     setCount(count-1)
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   )
// }
