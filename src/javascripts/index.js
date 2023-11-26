import { baseURL } from "../config/config.js";
import homePage from "./components/pages/home-page";
import { searchPage } from "./components/pages/search-page.js";
import { render } from "./util/renderElements";
import { fetchRecipes } from "./util/fetchRecipes.js";
import { getDefaultRecipes } from "./util/getDefaultRecipes.js";
import "../css/style.css";

const home_btn = document.getElementById("");
const recipes_btn = document.getElementById("");

window.addEventListener("load", () => {
  render(homePage());
});

document.addEventListener("click", async (e) => {
  console.log(e.target);
  let clicked_element = e.target;

  if (clicked_element.id === "search-btn") {
    let default_recipes = await getDefaultRecipes();
    // display search page with results for default recipes
    render(searchPage(default_recipes.data.recipes));
  }

  if (clicked_element.id === "home") {
    render(homePage());
  }

  if (clicked_element.id === "recipe") {
    let default_recipes = await getDefaultRecipes();
    // display search page with results for default recipes
    render(searchPage(default_recipes.data.recipes));
  }
});
