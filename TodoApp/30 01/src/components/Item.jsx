export default function Item({ item, list, setList }) {
  return (
    <>
    <h3 onClick={strike}>
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
  }
  function strike(){
    <style>
        
    </style>
  }
}
