import { Link } from "react-router-dom";
import styles from "./nav.module.css"
export default function Nav(){
    return(
        <div className={styles.navbar}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/foodApp" className={styles.link}>FoodApp</Link>
            <Link to="/todoApp" className={styles.link}>TodoApp</Link>
            <Link to="/cardsApp" className={styles.link}>CardsApp</Link>
            <Link to="/color" className={styles.link}>Color</Link>
            <Link to="/count" className={styles.link}>Count</Link>
            <Link to="/recipe" className={styles.link}>RecipeApp</Link>
        </div>
    )
}