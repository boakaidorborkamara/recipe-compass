import { render } from "./renderElements";
import { detailPage } from "../components/pages/details-page";
import { fetchRecipes } from "./fetchRecipes";
import { baseURL } from "../../config/config";

export const displayDetailsPage = async (ele) => {
  let selected_recipe_id = ele.id;

  let recipe_details = await fetchRecipes(
    `${baseURL}/recipes/${selected_recipe_id}?key=30688396-ef45-4237-ab82-58f2e7c5486c`
  );

  render(detailPage(recipe_details.data.recipe));
};
