import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Demo from "./demo";

export default function Todo() {
  let [list, setList] = useState([]);

  return (
    <>
      {/* <Form list={list} setList={setList} />
      <List list={list} setList={setList} /> */}
      <Demo/>
    </>
  );
}
