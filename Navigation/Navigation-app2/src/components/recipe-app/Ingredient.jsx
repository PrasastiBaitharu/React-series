import styles from "./ingredient.module.css"
export default function Ingredient({ ingredients }) {
  return (
    <div className={styles.ingredient}>
        <h3 className={styles.heading}>Ingredients</h3>
        <hr />
      {ingredients.map((ingr) => {
        return <p key={ingr}>{ingr}</p>;
      })}
    </div>
  );
}
