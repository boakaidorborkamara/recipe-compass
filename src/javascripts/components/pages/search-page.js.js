import { searchBar } from "../search-bar";
import { cards } from "../cards";

export const searchPage = ()=>{
    let parent_container = document.createElement("div");
    parent_container.style.height = "100vh";

    let recipe_cards_container = document.createElement("div");
    recipe_cards_container.classList.add("d-flex", "gap-5");

    // add children to parents
    parent_container.appendChild(searchBar());
    parent_container.appendChild(recipe_cards_container);

    return parent_container;
}

