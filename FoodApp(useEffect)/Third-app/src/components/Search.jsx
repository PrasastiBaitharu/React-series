import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API;

export default function Search({setFoodData}) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const res = await data.json();
      //console.log(res);
      setFoodData(res.results);
      // console.log(foodData)
    }
    fetchFood();
  }, [query]);
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* {console.log(foodData)} */}
      
    </>
  );
}
