import { useContext } from "react"
import { UserContext } from "../App"

export default function Checkout(){
    const [userName,pin] = useContext(UserContext)
    return(
        <div>
            <h1>Checkout as {userName} </h1>
            <p>Code is {pin}</p>
        </div>
    )
}