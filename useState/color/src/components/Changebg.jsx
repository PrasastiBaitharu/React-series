import { useState } from "react";

export default function Changebg() {
  let [color, setColor] = useState("white");
  let [click , setClick] = useState("Click");
  let[textColor , setTextColor] = useState("black");
  let [bgColor , setBgColor] = useState();

  function red() {
    setColor("red");
  }
  function blue() {
    setColor("blue");
  }
  function green() {
    setColor("green");
  }
  function pink() {
    setColor("Pink");
  }
  function white(){
    setColor("white")
  }
  function light(){
    setTextColor("black");
    setBgColor("white")
  }
  function dark(){
    setTextColor("white");
    setBgColor("black")
  }
  function button(){
    if(click === "Click"){
      setClick("Don't Click")
    }else{
      setClick("Click")
    }
  }

  return (
    <>
      <div style={{color:textColor , backgroundColor:bgColor , width:"100%" , height:"100vh"}}>
      <h1 style={{ textAlign: "center" }}>Background Color Changer</h1>
      <div style={{textAlign:"center", marginBottom:"10px"}}>
        {/* <button onClick={light} style={{margin:"0 20px"}}>Light</button>
        <button onClick={dark} style={{margin:"0 20px"}}>Dark</button> */}
        {
          (textColor === "black" ? <button onClick={dark} style={{margin:"0 20px"}}>Dark</button>:<button onClick={light} style={{margin:"0 20px"}}>Light</button>)
        }
      </div>
      <div
        style={{
          backgroundColor: color,
          border: "1px solid black",
          width: "600px",
          height: "60vh",
          margin: "auto",
        }} onClick={white}
      ></div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={red} style={{margin:"0 20px", width:"50px", height:"50px", borderRadius:"50%" ,backgroundColor:"red"}}></button>
        <button onClick={blue} style={{margin:"0 20px", width:"50px", height:"50px", borderRadius:"50%",backgroundColor:"blue"}}></button>
        <button onClick={green} style={{margin:"0 20px", width:"50px", height:"50px", borderRadius:"50%",backgroundColor:"green"}}></button>
        <button onClick={pink} style={{margin:"0 20px", width:"50px", height:"50px", borderRadius:"50%",backgroundColor:"pink"}}></button>
      </div>
      <div style={{textAlign:"center", marginTop:"20px"}}>
      <button onClick={button}>{click}</button>
      </div>
      </div>
    </>
  );
}