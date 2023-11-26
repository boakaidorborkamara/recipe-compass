import { baseURL } from "../config/config.js";
import homePage from "./components/pages/home-page";
import { searchPage } from "./components/pages/search-page.js";
import { render } from "./util/renderElements";
import { fetchRecipes } from "./util/fetchRecipes.js";
import "../css/style.css"

const home_btn = document.getElementById("");
const recipes_btn = document.getElementById("");

window.addEventListener("load", ()=>{
    render(homePage());
});

document.addEventListener("click", async (e)=>{
    console.log(e.target);
    let clicked_element = e.target
    if(clicked_element.id === "search-btn"){
        console.log("got it");
        let pizza_recipes = await fetchRecipes(
          `${baseURL}/recipes?search=pizza&key=30688396-ef45-4237-ab82-58f2e7c5486c`
        );
        
        render(searchPage(pizza_recipes.data.recipes));
    }
})

