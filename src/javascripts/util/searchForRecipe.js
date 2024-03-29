import { getSearchInputText } from "./getSearchedItem";
import { displayRecipesPage } from "./displayRecipes";
import { updateRecipesResultTitle } from "./updateRecipesResultTitle";
import { fetchRecipes } from "./fetchRecipes";
import { baseURL } from "../../config/config";

export const searchForRecipe = async (e) => {
  e.preventDefault();
  let recipe_form = document.getElementById("recipe-form");
  let search_input_text = getSearchInputText(recipe_form);

  let search_results = await fetchRecipes(
    `${baseURL}/recipes?search=${search_input_text}&key=30688396-ef45-4237-ab82-58f2e7c5486c`
  );

  if (search_results.results !== 0) {
    displayRecipesPage(search_results.data.recipes, searchForRecipe);
    updateRecipesResultTitle(search_input_text);
  } else {
    alert(`No result for ${search_input_text}`);
  }
};
