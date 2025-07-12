import { useEffect,useState } from "react";

export default function Search(){
    const [query,setQuery] = useState("Pizza");
    // const [foodData, setFoodData] = useState([]);
    useEffect(()=>{
        async function fetchFood(){
            const data  = await fetch(import.meta.env.VITE_SPOONACULAR_API)
            const res =await data.json();
            console.log(res);
            // await setFoodData(res.result);
            // console.log(foodData)
        }
        fetchFood();
    } , [query])
    return(
        <>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </>
    )
}