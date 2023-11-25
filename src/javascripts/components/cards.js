export const cards = ()=>{
    // card div 
    let card_div = document.createElement("div");
    card_div.classList.add("card");
    card_div.style.width = "18rem";

    // card image div
    let card_image_div = document.createElement("div");
    card_image_div.style.height = "70%";

    // card image
    let card_image = document.createElement("img");
    card_image.classList.add("card-img-top");
    card_image.setAttribute("src", "./assets/images/food3.jpg");
    card_image.setAttribute("alt", "Card image");

    //card body
    let card_body_div = document.createElement("div");
    card_body_div.classList.add("card-body");

    // h5
    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = "Recipe Name";

    // h5
    let p = document.createElement("p");
    h5.classList.add("card-text");
    h5.innerHTML = "Recipe Name";

    // card button div
    let btn_div = document.createElement("div");
    btn_div.classList.add("d-flex", "gap-2");

    //detail button
    let detail_btn = document.createElement("button");
    detail_btn.setAttribute("type", "button");
    detail_btn.classList.add("btn", "btn-secondary", "col-6");
    detail_btn.innerText = "Detail";

    //recipe url button
    let recipe_url_btn = document.createElement("button");
    recipe_url_btn.setAttribute("type", "button");
    recipe_url_btn.classList.add("btn", "btn-success", "col-6");
    recipe_url_btn.innerText = "Recipe URL";

    //add children to parents
    btn_div.appendChild(detail_btn);
    btn_div.appendChild(recipe_url_btn);

    card_body_div.appendChild(h5);
    card_body_div.appendChild(p);
    card_body_div.appendChild(btn_div);

    card_image_div.appendChild(card_image);

    card_div.appendChild(card_image_div);
    card_div.appendChild(card_body_div);

    //   return 
    return card_div;
}