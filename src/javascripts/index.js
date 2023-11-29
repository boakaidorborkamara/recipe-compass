import { displayRecipesPage } from "./util/displayRecipes.js";
import { displayHomePage } from "./util/displayHomePage.js";
import { getDefaultRecipes } from "./util/getDefaultRecipes.js";
import { searchForRecipe } from "./util/searchForRecipe.js";
import { getRecipeDetails } from "./util/getRecipeDetails.js";
import { fetchRecipes } from "./util/fetchRecipes.js";
import { baseURL } from "../config/config.js";
import "../css/style.css";

// render home page when browser loads
window.addEventListener("load", () => {
  displayHomePage();
});

document.addEventListener("click", async (e) => {
  let clicked_element = e.target;

  // search btn on home page
  if (clicked_element.id === "search-btn") {
    // recipes
    let default_recipes = await getDefaultRecipes();
    // display recipe page
    displayRecipesPage(default_recipes.data.recipes, searchForRecipe);
  }

  // home menu option
  if (clicked_element.id === "home") {
    displayHomePage();
  }

  // recipe menu option
  if (clicked_element.id === "recipe") {
    let default_recipes = await getDefaultRecipes();
    displayRecipesPage(default_recipes.data.recipes, searchForRecipe);
  }

  // recipe cards details btn
  if (clicked_element.classList.contains("recipe-details-btn")) {
    let selected_recipe_id = clicked_element.id;
    let recipe_details = await fetchRecipes(
      `${baseURL}/recipes/${selected_recipe_id}?key=30688396-ef45-4237-ab82-58f2e7c5486c`
    );
    console.log("btn", clicked_element, selected_recipe_id);
    console.log("details", recipe_details);
  }
});
