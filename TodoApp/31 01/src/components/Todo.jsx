import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function Todo() {
  let [list, setList] = useState([]);
  let [count,setCount] = useState(0);
  return (
    <>
      <Form list={list} setList={setList} count={count} setCount={setCount}/>
      <List list={list} setList={setList} count={count} setCount={setCount} />
      
    </>
  );
}
