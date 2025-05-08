// import Food from "./components/Food";
import { useState } from "react";
import FoodList from "./components/food-app/FoodList";
import Search from "./components/food-app/Search";
import Nav from "./components/food-app/Nav";
import Container from "./components/food-app/Container";
import FoodDetails from "./components/food-app/FoodDetails";
import ItemContainer from "./components/food-app/ItemContainer";
function FoodApp() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId] = useState("658615");
  return (
    <>
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <ItemContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </ItemContainer>
        <ItemContainer>
          <FoodDetails foodId={foodId} />
        </ItemContainer>
      </Container>
    </>
  );
}

export default FoodApp;
