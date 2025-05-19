//Color changer using useState
import { useState } from "react"

export default function App(){
  const [color,setColor] = useState("");
  function red(){
    setColor("red")
  }
  function yellow(){
    setColor("yellow")
  }
  function pink(){
    setColor("pink")
  }
  function black(){
    setColor("black")
  }
  function violet(){
    setColor("violet")
  }
  function neon(){
    setColor("neon")
  }
  return(
    <>
      <div style={{border:"1px solid black" , width:"400px" , height:"400px",backgroundColor:color}}></div>
      <button onClick={red}>Red</button>
      <button onClick={yellow}>Yellow</button>
      <button onClick={pink}>Pink</button>
      <button onClick={black}>Black</button>
      <button onClick={violet}>Violet</button>
      <button onClick={neon}>Neon</button>
    </>
  )
}