import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import FoodApp from "./FoodApp"
import TodoApp from "./TodoApp";
import CardsApp from "./CardsApp";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";
import Color from "./components/color/Color";
import Count from "./components/count/Count";
import RecipeApp from "./Recipe-App";
export default function Routing(){
    return(
        <div>
            <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/foodApp" element={<FoodApp/>}/>
                    <Route path="/todoApp" element={<TodoApp/>} />
                    <Route path="/cardsApp" element={<CardsApp/>} />
                    <Route path="/color" element={<Color/>}/>
                    <Route path="/count" element={<Count/>}/>
                    <Route path="/recipe" element={<RecipeApp/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}