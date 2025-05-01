import { useContext } from "react"
import { userContext } from "./App"

export default function Checkout(){
    //Consuming a context
    const {user} = useContext(userContext)
    return(
        <div>
            <p>Checkout as {user}</p>
        </div>
    )
}