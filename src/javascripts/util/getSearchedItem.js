import { fetchRecipes } from "./fetchRecipes";
import { baseURL } from "../../config/config";

export const getSearchInputText = (prop) => {
  let search_input = prop.children[0];

  let searched_item = search_input.value;
  validateSearch(searched_item);

  return searched_item;
};

const validateSearch = (prop) => {
  if (prop === "") {
    console.log("Search Input is empty!");
    return;
  }
};

export const searchForRecipe = async (prop) => {
  let searched_item = prop;

  let search_results = await fetchRecipes(
    `${baseURL}/recipes?search=${searched_item}&key=30688396-ef45-4237-ab82-58f2e7c5486c`
  );

  return search_results;
};
