import { searchBar } from "../search-bar";
import { searchResultTitle } from "../search-result-title";
import { cards } from "../cards";

export const searchPage = (recipes) => {
  // parent div
  let parent_container = document.createElement("div");
  parent_container.style.height = "100vh";

  let recipe_cards_container = document.createElement("div");
  recipe_cards_container.classList.add(
    "d-flex",
    "gap-5",
    "container",
    "flex-wrap",
    "pb-5"
  );

  // add children to parents
  recipes.forEach((recipe) => {
    // create recipe cards based on recipe recived
    recipe_cards_container.appendChild(cards(recipe));
  });

  parent_container.appendChild(searchBar());
  parent_container.appendChild(searchResultTitle());
  parent_container.appendChild(recipe_cards_container);

  return parent_container;
};
