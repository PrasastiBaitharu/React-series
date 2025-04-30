import { useContext, useState } from "react"
import { userContext } from "./App"

export default function Login(){
    const{setUser,setPassword} = useContext(userContext)
    const[name,setName] = useState("");
    const[data,setData] = useState();
    function handleSubmit(){
        setUser(name);
        setPassword(data);
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username"/> <br />
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Password"/> <br />
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}