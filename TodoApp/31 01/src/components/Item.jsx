export default function Item({ item, list, setList,count, setCount }) {
  return (
    <>
    <h3>
      {item}<button onClick={handleDelete}>X</button>
    </h3>
    </>
  );
  function handleDelete() {
    setList(
      list.filter((temp) => {
        return temp != item;
      })
    );
    setCount(count-1)
  }
}