import homePage from "./components/pages/home-page";
import { render } from "./util/renderElements";
import "../css/style.css"

window.addEventListener("load", ()=>{
    render(homePage());
});

