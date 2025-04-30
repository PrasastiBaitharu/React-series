import { createContext, useState } from "react"
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Singup";

export const userContext = createContext();
export default function App(){
  const[user,setUser] = useState("Guest");
  const[password,setPassword] = useState(0);
  return(
    <userContext.Provider value={{user,setUser,password,setPassword}}>
      <Login/>
      <Signup/>
      <Checkout/>
    </userContext.Provider>
  )
}