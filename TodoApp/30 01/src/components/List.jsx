import Item from "./Item";

export default function List({ list, setList }) {
  return (
    <>
      {list.map((item) => {
        return <Item key={item} item={item} list={list} setList={setList} />
      })}
    </>
  );
}
