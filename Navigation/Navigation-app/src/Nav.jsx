import { Link } from "react-router-dom";
export default function Nav(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    )
}