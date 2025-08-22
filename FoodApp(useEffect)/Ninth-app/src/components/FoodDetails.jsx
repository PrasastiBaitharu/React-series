import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API;

  const [food, setFood] = useState({});
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const data = await fetch(`${URL}?apiKey=${API_KEY}`);
      // console.log(data);
      const res = await data.json();
      // console.log(res.results);
      // setFoodData(res.results);
      console.log(res);
      setFood(res);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <h1>Food Details-</h1>
      <div>
        <p>Title : {food.title}</p>
        <img src={food.image}/>
        <div>
            🕑<span>{food.readyInMinutes}</span>
            🧍<span>{food.servings}</span>
            <span>{food.vegetarian?"🥕Vegetarian":"🍖Non-Vegetarian"}</span>
            <span>{food.vegan?"🐄Vegan":""}</span>
        </div>
        <div>
            <p>💲{food.pricePerServing}</p>
        </div>
        <div>
            <h1>Instruction</h1>
            {
                isLoading?("Loading..."):(food.analyzedInstructions[0].steps.map((step)=>{
                    return (
                        <li>{step.step}</li>
                    )
                }))
            }
        </div>
      </div>
    </div>
  );
}
