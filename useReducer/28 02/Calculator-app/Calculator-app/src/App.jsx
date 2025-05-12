import { useState } from "react";

export default function App(){
  const [value , setValue] = useState("");
  const [opr,setOpr] = useState("+")
  let a = parseInt(value);
  function plus(){
    console.log(a)
    setValue("");
    setOpr("+");
  }
  function minus(){
    console.log(a)
    setValue("");
    setOpr("-");
  }
  function mul(){
    console.log(a)
    setValue("");
    setOpr("*");
  }
  function div(){
    console.log(a)
    setValue("");
    setOpr("/");
  }

  function equal(){
    setValue("");
    let b = parseInt(value);
    console.log(b);
    if(opr === "+"){
      let v = a+b;
      setValue(v);
    }else if(opr === "-"){
      let v = a-b;
      setValue(v);
    }else if(opr === "*"){
      let v = a*b;
      setValue(v);
    }else if(opr === "/"){
      let v = a/b;
      setValue(v);
    }
  }
  // const [value2 , setValue2] = useState();
  return(
    <>
      <input type="number" value={value}/><br />
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
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
      <button onClick={equal}>=</button>
    </>
  )
}