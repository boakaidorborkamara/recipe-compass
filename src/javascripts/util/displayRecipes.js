import { render } from "./renderElements";
import { hideBodyBackgroundImage } from "./hideBodyBackgroundImage";
import { recipesPage } from "../components/pages/recipes-page";

export const displayRecipesPage = (prop, callback) => {
  console.log(callback);
  render(recipesPage(prop, callback));
  hideBodyBackgroundImage();
};
