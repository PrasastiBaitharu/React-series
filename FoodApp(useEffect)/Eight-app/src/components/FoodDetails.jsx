import { useEffect, useState } from "react";

export default function FoodDetails({foodId})
{
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;

    const API_KEY='6b73a77a3f8e4101b634df58c6ca8b9d';

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