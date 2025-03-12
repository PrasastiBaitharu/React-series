import { useState } from "react";

function App(){
  let [color , setColor] = useState("white");
  function red(){
    setColor("red");
  }
  function black(){
    setColor("black");
  }
  function blue(){
    setColor("blue");
  }
  function yellow(){
    setColor("yellow");
  }
  function green(){
    setColor("green");
  }
  
  return(   
    <>      
      <div style={{border:"1px solid black", width:"300px", height:"50vh" , backgroundColor:color}}></div>
      <button onClick={red}>Red</button>
      <button onClick={black}>Black</button>
      <button onClick={blue}>Blue</button>
      <button onClick={yellow}>Yellow</button>
      <button onClick={green}>Green</button>
    </>
  )
}

export default App;