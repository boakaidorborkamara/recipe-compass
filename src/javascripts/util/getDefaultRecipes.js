import { fetchRecipes } from "./fetchRecipes";
import { baseURL } from "../../config/config";

export let getDefaultRecipes = async () => {
  let default_item = "pizza";

  let recipes = await fetchRecipes(
    `${baseURL}/recipes?search=${default_item}&key=30688396-ef45-4237-ab82-58f2e7c5486c`
  );

  return recipes;
};
