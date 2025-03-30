import { useState } from "react"

export default function Form({list,setList}){
    let [Todo,setTodo]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        setList([...list , Todo])
        setTodo("");
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={Todo} onChange={(e)=>{setTodo(e.target.value)}}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}