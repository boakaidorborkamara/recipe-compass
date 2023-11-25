const homePage = ()=>{

    let parent_div = document.createElement("div");
    parent_div.classList.add(
      "d-flex", "justify-content-center", "align-items-center"
    );
    parent_div.style.height = "calc(100vh - 7vh";


    // section 
    let section = document.createElement("section");
    section.classList.add("d-flex", "flex-column" ,"justify-content-center", "align-items-center");

    // heading 1 
    let h1 = document.createElement("h1");
    h1.classList.add("mb-4", "fw-bolder");
    h1.innerText = "Find your Recipes";

    //button 
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "search-btn");
    button.classList.add("btn", "btn-success", "shadow-sm");
    button.innerText = "SEARCH RECIPE";

    // add children elements to section 
    section.appendChild(h1);
    section.appendChild(button);
    parent_div.appendChild(section);

    return parent_div;
}

export default homePage;