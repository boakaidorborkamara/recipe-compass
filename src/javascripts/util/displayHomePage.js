import { render } from "./renderElements";
import { showBodyBackgroundImage } from "./showBodyBackgroundImage";
import homePage from "../components/pages/home-page";

export const displayHomePage = (prop) => {
  render(homePage());
  showBodyBackgroundImage();
};
