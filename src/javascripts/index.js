import { baseURL } from "../config/config.js";
import homePage from "./components/pages/home-page";
import { searchPage } from "./components/pages/search-page.js";
import { render } from "./util/renderElements";
import { fetchRecipes } from "./util/fetchRecipes.js";
import { getDefaultRecipes } from "./util/getDefaultRecipes.js";
import { showBodyBackgroundImage } from "./util/showBodyBackgroundImage.js";
import { hideBodyBackgroundImage } from "./util/hideBodyBackgroundImage.js";
import "../css/style.css";

const home_btn = document.getElementById("");
const recipes_btn = document.getElementById("");

window.addEventListener("load", () => {
  render(homePage());
  showBodyBackgroundImage();
});

document.addEventListener("click", async (e) => {
  console.log(e.target);
  let clicked_element = e.target;

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

    // display search page with results for default recipes
    render(searchPage(default_recipes.data.recipes));

    hideBodyBackgroundImage();
  }

  // if (clicked_element.id === "submit-search-btn") {
  //   let recipe_form = document.getElementById("submit-search-btn");
  //   console.log(recipe_form);
  //   console.log("submitting", recipe_form);
  //   recipe_form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     console.log("working");
  //   });
  // }
});
