import { useState } from "react"

export default function Todo(){
    const[todo , setTodo] = useState("");
    const[todos , setTodos] = useState([]);

    function handleSumbit(e){
        e.preventDefault();
        // setTodos(todo) not work as we are copying todo string to an array
        // setTodos([todo]) not work as we are copying todo string to 0th index of array
        setTodos([...todos , todo])//spread operator is used to add the existing todo in the list
        setTodo("");
    }

    return(
        <>
            <form onSubmit={handleSumbit}>
                <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {todos}
            {console.log(todos)}
        </>
    )
}