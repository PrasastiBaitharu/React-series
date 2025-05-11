import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {count:0, incrementBy:1});
  function reducer(state,action) {
    if(action.type=="increment"){
      return {...state , count:state.count+action.payload};
    }else if(action.type=="setIncrement"){
      return{...state , incrementBy:action.payload}
    }
    else{
      return {...state , count:state.count-action.payload};
    }
  }
  return (
    <>
      <input type="text" value={state.incrementBy} onChange={(e)=>{
        dispatch({type:"setIncrement" , payload:Number(e.target.value) })
      }}/>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"increment", payload:state.incrementBy})}}>+</button>
      <button onClick={()=>{dispatch({type:"decrement", payload:state.incrementBy})}}>-</button>
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
