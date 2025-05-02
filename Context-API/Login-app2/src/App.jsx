import { createContext, useState } from "react";
import Checkout from "./components/Checkout";

export const UserContext = createContext()
export default function App(){
  const [user,setUser] = useState(["guest" , 1234])
  return(
    <>
      <UserContext.Provider value={[userName,pin]}>
        <Checkout/>
      </UserContext.Provider>
    </>
  )
}