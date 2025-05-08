import { useState } from "react";
import styles from "./foodItem.module.css";

export default function FoodItem({ foods, setInstruction, setIngredients }) {
  function handleInstruction() {
    setInstruction(foods.instructions);
  }
  

  return (
    <div>
      <div className={styles.itemContainer}>
        <img src={foods.image} className={styles.image} />
        <h3 className={styles.name}>Name: {foods.name}</h3>
        <h5 className={styles.rating}>Rating: {foods.rating}</h5>
        <div className={styles.button}>
          <button onClick={handleInstruction}>INSTRUCTION</button>
          <button onClick={()=>{setIngredients(foods.ingredients)}}>INGRIDIENTS</button>
        </div>
      </div>
    </div>
  );
}
