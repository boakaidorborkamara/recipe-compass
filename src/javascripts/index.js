import { displayRecipesPage } from "./util/displayRecipes.js";
import { displayHomePage } from "./util/displayHomePage.js";
import { getDefaultRecipes } from "./util/getDefaultRecipes.js";
import { searchForRecipe } from "./util/searchForRecipe.js";
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
    displayRecipesPage(default_recipes.data.recipes);

    // display search page
    // render(
    //   recipesPage(default_recipes.data.recipes, async (e) => {
    //     e.preventDefault();
    //     let recipe_form = document.getElementById("recipe-form");
    //     let search_input_text = getSearchInputText(recipe_form);
    //     let search_results = await searchForRecipe(search_input_text);
    //     render(searchPage(search_results.data.recipes));
    //   })
    // );
  }
});
