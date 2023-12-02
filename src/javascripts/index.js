import { displayRecipesPage } from "./util/displayRecipes.js";
import { displayHomePage } from "./util/displayHomePage.js";
import { getDefaultRecipes } from "./util/getDefaultRecipes.js";
import { searchForRecipe } from "./util/searchForRecipe.js";
import "../css/style.css";
import { displayDetailsPage } from "./util/displayDetails.js";

// render home page when browser loads
window.addEventListener("load", () => {
  displayHomePage();
});

// invoke different functions based on click events
document.addEventListener("click", async (e) => {
  let clicked_element = e.target;
  console.log(clicked_element);

  // diplay home page when logo is clicked
  if (clicked_element.id === "logo") {
    displayHomePage();
  }

  // display recipes page when search btn on home page is clicked
  if (clicked_element.id === "search-btn") {
    // recipes
    let default_recipes = await getDefaultRecipes();
    // display recipe page
    displayRecipesPage(default_recipes.data.recipes, searchForRecipe);
  }

  // display homepage when HOME menu items is clicked
  if (clicked_element.id === "home") {
    displayHomePage();
  }

  // display recipes when RECIPE menu items is clicked
  if (clicked_element.id === "recipe") {
    let default_recipes = await getDefaultRecipes();
    displayRecipesPage(default_recipes.data.recipes, searchForRecipe);
  }

  // display details specific recipe when the detail btn on the recipe card is clicked
  if (clicked_element.classList.contains("recipe-details-btn")) {
    displayDetailsPage(clicked_element);
  }
});
