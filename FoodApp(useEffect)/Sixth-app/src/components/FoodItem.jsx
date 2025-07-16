import styles from "./foodItem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer} >
        <button className={styles.itemButton} >VIEW RECIPE</button>
      </div>
    </div>
  );
}
