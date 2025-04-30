import { useContext, useState } from "react"
import { userContext } from "./App"

export default function Signup(){
    const{setUser,setPassword} = useContext(userContext)
    const[name,setName] = useState("");
    const[data,setData] = useState();
    const[reData , setReData] = useState();
    function handleSubmit(){
        setUser(name);
        if(data === reData){
            setPassword(data);
        }else{
            setPassword("didn't match")
        }
    }
    return(
        <div>
            <h1>Signup</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username" /> <br />
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Password" /> <br />
            <input type="text" value={reData} onChange={(e)=>setReData(e.target.value)} placeholder="Re-enter Password" /> <br />
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}