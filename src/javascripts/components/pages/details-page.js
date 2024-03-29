export const detailPage = (prop) => {
  let ingredients = prop.ingredients;
  // parent div
  let parent_div = document.createElement("div");
  parent_div.classList.add("container");

  //   html
  let detials_section = `
    <seciton class="container py-5 d-flex justify-content-between">
                <button type="button" class="btn btn-success" id="back-btn">Back to Recipe List</button>
                <button type="button" class="btn btn-light" id="bookmark-btn"><i class="bi bi-bookmark"></i> Bookmark</button>
            </seciton>
            <div class="d-flex gap-5 flex-wrap p-2">
                <div class="col-6">
                    
                    <div style="width: 100%;">
                        <img src=${prop.image_url}  style="width: 100%;" alt="">
                    </div>
                    <div>
                        <button type="button" class="btn btn-link">See Recipe Source</button>
                    </div>
                </div>
                <div class="c0l-6">
                    <div class="d-flex gap-4">
                        <div class="d-flex gap-2">
                            <i class="bi bi-alarm-fill text-success"></i>
                            <p>45 minutes</p>
                        </div>
                        <div class="d-flex gap-2">
                            <i class="bi bi-person-check-fill text-success"></i>
                            <p>${prop.servings} serve</p>
                        </div>
                    </div>
                    <h2 class="mt-4 fw-bold">Recipe Ingredients</h2>
                    <ul>
                        ${generate_list(ingredients)}
                    </ul>

                    <!-- <div class="mt-5">
                        <a href="http://www.thevintagemixer.com/2013/03/homemade-frozen-bean-and-veggie-burritos/" class="btn btn-dark btn-lg active" role="button" aria-pressed="true">See Recipe Source</a>
                    </div> -->
                     
                </div>
            </div>
  `;

  parent_div.insertAdjacentHTML("beforeend", detials_section);
  return parent_div;
};

/**
 * loop through ingredients and generate & return HTML list elements
 *
 * @param {array} items
 * @returns array
 */
const generate_list = (items) => {
  let list_items = [];

  items.forEach((ingredient) => {
    list_items.push(`
        <li class="my-2 py-2 border-bottom border-dark d-flex align-items-start">
            <div class="m-0">
                <h6 class="fw-bolder m-0 text-success py-2">
                <i class="bi bi-check-square-fill"></i>${ingredient.description}
                </h6>
                <p class="m-0">
                <span>Quantity:</span> ${ingredient.quantity}
                </p>
                <p class="m-0">Unit: ${ingredient.unit}</p>
            </div>
        </li>;
    `);
  });

  return list_items;
};
