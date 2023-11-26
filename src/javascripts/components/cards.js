export const cards = (recipe)=>{
    // card div 
    let card_div = document.createElement("div");
    card_div.classList.add("card");
    card_div.style.width = "18rem";

    // card image div
    let card_image_div = document.createElement("div");
    card_image_div.classList.add("bg-primary")
    card_image_div.style.height = "200px";

    // card image
    let card_image = document.createElement("img");
    card_image.classList.add("card-img-top"); 
    card_image.setAttribute("src", `${recipe.image_url}`);
    card_image.setAttribute("alt", "Card image");
    card_image.setAttribute("width", "100%");
    card_image.setAttribute("height", "100%");

    //card body
    let card_body_div = document.createElement("div");
    card_body_div.classList.add("card-body");
    card_body_div.setAttribute("height", "10px");

    // h5
    let h5 = document.createElement("h5");
    h5.classList.add("card-title","fw-bolder");
    h5.innerHTML = `${recipe.title}`;

    // p
    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = `Publisher: ${recipe.publisher}`;

    // card button div
    let btn_div = document.createElement("div");
    btn_div.classList.add("d-flex", "gap-2", "container", "pb-4");
    btn_div.setAttribute("height", "400px");

    //detail button
    let detail_btn = document.createElement("button");
    detail_btn.setAttribute("type", "button");
    detail_btn.classList.add("btn", "btn-success", "col-12");
    detail_btn.innerText = "Detail";
    detail_btn.id = `${recipe.id}`;

    //recipe url button
    // let recipe_url_btn = document.createElement("button");
    // recipe_url_btn.setAttribute("type", "button");
    // recipe_url_btn.classList.add("btn", "btn-success", "col-6");
    // recipe_url_btn.innerText = "Recipe URL";

    //add children to parents
    btn_div.appendChild(detail_btn);
    // btn_div.appendChild(recipe_url_btn);
   

    card_body_div.appendChild(h5);
    card_body_div.appendChild(p);
    // card_body_div.appendChild(btn_div);

    card_image_div.appendChild(card_image);

    card_div.appendChild(card_image_div);
    card_div.appendChild(card_body_div);
    card_div.appendChild(btn_div);

    //   return 
    return card_div;
}