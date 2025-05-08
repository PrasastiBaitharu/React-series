import { useState } from "react";
import Search from "./components/recipe-app/Search";
import FoodList from "./components/recipe-app/FoodList";
import Container from "./components/recipe-app/Container";
import ItemContainer from "./components/recipe-app/ItemContainer";
import Instruction from "./components/recipe-app/Instruction";
import Ingredient from "./components/recipe-app/Ingredient";
import Nav from "./components/recipe-app/Nav";
export default function RecipeApp() {
  const [foodData, setFoodData] = useState([]);
  const [instruction, setInstruction] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  return (
    <>
      <Nav/>
      <Search setFoodData={setFoodData} />
      <Container>
        <ItemContainer>
          <FoodList
            foodData={foodData}
            setInstruction={setInstruction}
            setIngredients={setIngredients}
          />
        </ItemContainer>
        <ItemContainer>
          <Instruction instruction={instruction} />
          <Ingredient ingredients={ingredients} />
        </ItemContainer>
      </Container>
    </>
  );
}
