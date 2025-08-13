import { useEffect, useState } from "react";

export default function FoodDetails({foodId})
{
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;

    const API_KEY=import.meta.env.VITE_SPOONACULAR_API;

    const [food, setFood] = useState({})

    useEffect(()=>{
            async function fetchFood(){
                const data=await fetch(`${URL}?apiKey=${API_KEY}`)
                // console.log(data);
                const res= await data.json()
                // console.log(res.results);
                // setFoodData(res.results);
                console.log(res);
                setFood(res)
               
            }
            fetchFood();
        },[foodId])
    return(
        <div >
            <p>Food Details-</p>
            <p>{food.id}</p> 
            <p>{food.title}</p>
            <img src={food.image} alt="" />
        </div>
    )
}