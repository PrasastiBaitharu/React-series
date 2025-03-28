import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [list, setList] = useState([]);
  return (
    <>
      <Form list={list} setList = {setList}/>
      <TodoList list={list}/>
    </>
  );
}
