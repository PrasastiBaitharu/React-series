import { useEffect, useState } from "react"
import styles from "./search.module.css"
export default function Search({setFoodData}){
    const [food , SetFood] = useState("");
    useEffect(()=>{
        async function fetchFood(){
            const data =await fetch('https://dummyjson.com/recipes')
            const res = await data.json();
            setFoodData(res.recipes);
        }
        fetchFood();
    },[food])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.search} type="text" value={food} onChange={(e)=>{SetFood(e.target.value)}} />🔍
        </div>
    )
}