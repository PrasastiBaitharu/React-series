import { useState } from "react";

export default function App(){
  const [value , setValue] = useState("");
  const [opr,setOpr] = useState("+")
  let a = parseInt(value);
  function equal(){
    if(opr == "+"){
      let b = parseInt(value)
      setValue("");
      setValue(a+b);
    }else if(opr=="-"){
      let b = parseInt(value);
      setValue("");
      setValue(a-b)
    }else if(opr=="-"){
      let b = parseInt(value);
      setValue("");
      setValue(a*b)
    }else if(opr=="-"){
      let b = parseInt(value);
      setValue("");
      setValue(a/b)
    }else{
      setValue("")
    }
  }
  // const [value2 , setValue2] = useState();
  return(
    <>
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}/><br />
      <button onClick={()=>setValue(value+"1")}>1</button>
      <button onClick={()=>setValue(value+"2")}>2</button>
      <button onClick={()=>setValue(value+"3")}>3</button>
      <button onClick={()=>setValue(value+"4")}>4</button>
      <button onClick={()=>setValue(value+"5")}>5</button>
      <button onClick={()=>setValue(value+"6")}>6</button>
      <button onClick={()=>setValue(value+"7")}>7</button>
      <button onClick={()=>setValue(value+"8")}>8</button>
      <button onClick={()=>setValue(value+"9")}>9</button>
      <button onClick={()=>setValue(value+"0")}>0</button>
      <button onClick={()=>{setOpr("+");setValue("")}}>+</button>
      <button onClick={()=>{setOpr("-");setValue("")}}>-</button>
      <button onClick={()=>{setOpr("*");setValue("")}}>*</button>
      <button onClick={()=>{setOpr("/");setValue("")}}>/</button>
      <button onClick={equal}>=</button>
      <button onClick={()=>setValue("")}>C</button>
    </>
  )
}