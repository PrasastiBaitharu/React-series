import { useState } from "react";

function App(){
  let [color1 , setColor1] = useState();
  let [color2 , setColor2] = useState();

  function light(){
    setColor1("white");
    setColor2("black");
  }
  function dark(){
    setColor1("black");
    setColor2("white");
  }

  return(
    <div style={{background:color1 , color:color2 , width:"100%" , height:"40vh" ,textAlign:"center" , padding:"15% 0" }}>
      <h1>Hello world</h1>
      <h2>I am prasasti</h2>
      <h3>Welcome to react js</h3>
      {/* {
        (color1 === "white" ? <button onClick={dark}>Dark</button>:<button onClick={light}>Light</button>)
      } */}

      <button onClick={dark} style={{margin:"0 10px"}}>Dark</button>
      <button onClick={light} style={{margin:"0 10px"}}>Light</button>
    </div>
  )
}

export default App;