import homePage from "./components/pages/home-page";
import { searchPage } from "./components/pages/search-page.js";
import { render } from "./util/renderElements";
import "../css/style.css"

const home_btn = document.getElementById("");
const recipes_btn = document.getElementById("");

window.addEventListener("load", ()=>{
    render(homePage());
});

document.addEventListener("click", (e)=>{
    console.log(e.target);
    let clicked_element = e.target
    if(clicked_element.id === "search-btn"){
        console.log("got it");
        console.log(searchPage())
        render(searchPage());
    }
})

