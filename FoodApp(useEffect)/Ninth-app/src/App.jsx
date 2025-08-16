// import Food from "./components/Food";
import { useState } from "react";
import FoodList from "./components/FoodList";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Container from "./components/Container";
import FoodDetails from "./components/FoodDetails";
import ItemContainer from "./components/ItemContainer";
function App() {
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

export default App;
