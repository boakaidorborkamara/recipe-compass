export const searchResultTitle = ()=>{
    // parent div 
    let parent_div = document.createElement("div");
    parent_div.classList.add("container");

    // h2 
    let h2 = document.createElement("h2");
    h2.classList.add("my-5", "fw-bolder");
    h2.innerText = "Recipes for ";

    // span 
    let span = document.createElement("span");
    span.classList.add("text-success");
    span.innerText = "Pizza";

    // add children to parents 
    h2.appendChild(span);
    parent_div.appendChild(h2);

    // return 
    return parent_div
}