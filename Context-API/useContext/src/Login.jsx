import { useContext, useState } from "react";
import { userContext } from "./App";

export default function Login() {
  const { user,setUser } = useContext(userContext);
  const [data,setData] = useState(user)
  function handleSubmit(){
    setUser(data)
  }
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e)=>setData(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
