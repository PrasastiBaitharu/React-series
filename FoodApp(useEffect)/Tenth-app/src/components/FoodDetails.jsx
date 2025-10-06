import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API;
  const imgs = "https://img.spoonacular.com/ingredients_100x100/"

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
    <div className={styles.foodDetails}>
      <h1>Food Details-</h1>
      <div className={styles.content}>
        <p>Title : {food.title}</p>
        <img src={food.image} id={styles.foodImage}/>
        <div className={styles.details}>
            <span>🕑{food.readyInMinutes}</span>
            <span>🧍{food.servings}</span>
            <span>{food.vegetarian?"🥕Vegetarian":"🍖Non-Vegetarian"}</span>
            <span>{food.vegan?"🐄Vegan":""}</span>
        </div>
        <div className={styles.price}>
            <p>💲{food.pricePerServing}</p>
        </div>
        <div className={styles.ingredients}>
          <h1>Ingredients</h1>
          {
                isLoading?("Loading..."):( food.extendedIngredients.map((ingr)=>{
                  return(
                    <div className={styles.ingredientsItem}>
                      <div className={styles.ingredientsImage}>
                        <img src={`${imgs}${ingr.image}`} alt="" />
                      </div>
                      <div className={styles.ingredientsDetails}>
                        <p>{ingr.name}</p>
                        <p>{ingr.amount} <span>{ingr.unit}</span></p>
                      </div>
                    </div>
                  )
                }))
          }
        </div>
        <div className={styles.instruction}>
            <h1>Instruction</h1>
            {
                isLoading?("Loading..."):(food.analyzedInstructions[0].steps.map((step)=>{
                    return (
                        <li className={styles.instructionList}>{step.step}</li>
                    )
                }))
            }
        </div>
        
      </div>
    </div>
  );
}
