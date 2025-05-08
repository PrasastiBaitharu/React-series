import FoodItem from "./FoodItem";

export default function FoodList({foodData,setInstruction,setIngredients}){
    return(
        <div>
            {foodData.map((foods)=>{
                return <FoodItem key={foods.id} foods={foods} setInstruction={setInstruction} setIngredients={setIngredients} />
            })}
        </div>
    )
}