export default function FoodItem({ food }) {
  return (
    <>
      {/* <h1>{food.id}</h1> */}
      <h1>{food.title}</h1>
      <img src={food.image} alt="" />
    </>
  );
}
