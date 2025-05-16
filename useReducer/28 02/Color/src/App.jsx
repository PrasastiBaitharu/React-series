import { useReducer } from "react";

export default function App(){
  const [state,dispatch] = useReducer(reducer,"black");
  function reducer(state,action){
    if(action.type=="red"){
      return state = action.payLoad
    }else if(action.type == "yellow"){
      return state = action.payLoad
    }else if(action.type == "blue"){
      return state = action.payLoad
    }else if(action.type == "violet"){
      return state = action.payLoad
    }else{
      return state;
    }
  }

  return(
    <>
      <div style={{border:"1px solid black" , width:"400px" , height:"400px", backgroundColor:state }}></div>
      <button onClick={()=>dispatch({type:"red" , payLoad:"red"})}>Red</button>
      <button onClick={()=>dispatch({type:"yellow" , payLoad:"yellow"})}>Yellow</button>
      <button onClick={()=>dispatch({type:"blue" , payLoad:"blue"})}>Blue</button>
      <button onClick={()=>dispatch({type:"violet" , payLoad:"violet"})}>Violet</button>
    </>
  )
}