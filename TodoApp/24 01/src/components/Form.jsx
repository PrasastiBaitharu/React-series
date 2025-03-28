import { useState } from "react";
export default function Form({list , setList}) {
  const [todo, setTodo] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, todo]);
    setTodo("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
