// import Food from "./components/Food";
import { useState } from "react";
import FoodList from "./components/FoodList";
import Search from "./components/Search";
import Nav from "./components/Nav";
import "./App.css";
import styles from "../src/components/container.module.css";
import Container from "./components/Container";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} />

        <h1>Hello</h1>
      </Container>
    </>
  );
}

export default App;
