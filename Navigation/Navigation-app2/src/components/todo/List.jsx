import Item from "./Item";

export default function List({ list, setList,count,setCount }) {
  return (
    <>
      {list.map((item) => {
        return <Item key={item} item={item} list={list} setList={setList} count={count} setCount={setCount}/>
      })}
      <h5>Total number of items: {count} </h5>
    </>
  );
}
