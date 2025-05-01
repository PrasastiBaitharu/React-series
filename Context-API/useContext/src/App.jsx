import { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";

export const userContext = createContext();//Creating a context

export default function App(){
  const[user,setUser] = useState("guest");

  return(
    //Providing a context
    <userContext.Provider value={{user,setUser}}>
      <Login/>
      <Checkout/>
    </userContext.Provider>
  )
}