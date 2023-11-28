import { appState } from "../config/config.js";
import homePage from "./components/pages/home-page";
import { searchPage } from "./components/pages/search-page.js";
import { render } from "./util/renderElements";
import { getDefaultRecipes } from "./util/getDefaultRecipes.js";
import { showBodyBackgroundImage } from "./util/showBodyBackgroundImage.js";
import { hideBodyBackgroundImage } from "./util/hideBodyBackgroundImage.js";
import { getSearchInputText, searchForRecipe } from "./util/getSearchedItem.js";
import "../css/style.css";

const home_btn = document.getElementById("");
const recipes_btn = document.getElementById("");
let state = "";

window.addEventListener("load", () => {
  render(homePage());
  showBodyBackgroundImage();
  state = "search";
});

document.addEventListener("click", async (e) => {
  console.log(e.target);
  let clicked_element = e.target;
  console.log(state);

  if (clicked_element.id === "search-btn") {
    let default_recipes = await getDefaultRecipes();

    // display search page with results for default recipes
    render(searchPage(default_recipes.data.recipes));

    hideBodyBackgroundImage();
  }

  if (clicked_element.id === "home") {
    render(homePage());
    showBodyBackgroundImage();
  }

  if (clicked_element.id === "recipe") {
    let default_recipes = await getDefaultRecipes();

    // display search page
    render(searchPage(default_recipes.data.recipes));
    hideBodyBackgroundImage();

    let recipe_form = document.getElementById("recipe-form");
    recipe_form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let search_input_text = getSearchInputText(recipe_form);
      let search_results = await searchForRecipe(search_input_text);
      render(searchPage(search_results.data.recipes));
      console.log("I'm working", search_results);
    });
  }
});

if (state === "search") {
  let recipe_form = document.getElementById("recipe-form");
  console.log(recipe_form);
  // console.log("submitting", recipe_form);
  recipe_form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("working");
  });
}
