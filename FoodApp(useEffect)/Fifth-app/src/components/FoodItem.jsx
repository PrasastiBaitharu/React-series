export default function FoodItem({ food }) {
  return (
    <div className="card">
      <img src={food.image} className="image"/>
      <h1>{food.title}</h1>
      <button>VIEW RECIPE</button>
    </div>
  );
}
