import { getSearchInputText } from "./getSearchedItem";
import { displayRecipesPage } from "./displayRecipes";
import { fetchRecipes } from "./fetchRecipes";
import { baseURL } from "../../config/config";

export const searchForRecipe = async () => {
  let recipe_form = document.getElementById("recipe-form");
  let search_input_text = getSearchInputText(recipe_form);

  let search_results = await fetchRecipes(
    `${baseURL}/recipes?search=${search_input_text}&key=30688396-ef45-4237-ab82-58f2e7c5486c`
  );

  displayRecipesPage(search_results.data.recipes, searchForRecipe);
};
