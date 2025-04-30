import { useContext } from "react"
import { userContext } from "./App"

export default function Checkout(){
    const{user,password} = useContext(userContext)
    return(
        <div>
            <p>Your username is {user}</p>
            <p>Your Password {password}</p>
        </div>
    )
}