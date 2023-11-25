import home_page from "./components/pages/home-page";
import { render } from "./util/renderElements";
import "../css/style.css"

window.addEventListener("load", ()=>{
    render(home_page());
});

