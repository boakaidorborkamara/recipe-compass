export const searchBar = (callback) => {
  // section ele
  let section = document.createElement("section");
  section.classList.add(
    "h-50",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  section.setAttribute("id", "search-bar-section");

  // div
  let div = document.createElement("div");
  div.classList.add(
    "container",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );

  // heading h1
  let h1 = document.createElement("h1");
  h1.classList.add("text-dark", "fw-bolder", "shadow-sm");
  h1.innerText = "Let's explore recipes";

  //form
  let form = document.createElement("form");
  form.classList.add("form-inline", "d-flex", "w-75");
  form.id = "recipe-form";
  form.onsubmit = callback;

  // input
  let input = document.createElement("input");
  input.classList.add("form-control", "rounded-0", "shadow-sm");
  input.setAttribute("placeholder", "tomato, potatoe, pizza");
  input.setAttribute("aria-label", "Search");
  input.setAttribute("required", "");

  //button
  let button = document.createElement("button");
  button.classList.add("btn", "btn-success", "my-2", "my-sm-0", "rounded-0");
  button.setAttribute("type", "submit");
  button.id = "submit-search-btn";
  button.innerHTML = `<i class="bi bi-search-heart-fill"></i>`;

  // append children elements
  form.appendChild(input);
  form.appendChild(button);
  div.appendChild(h1);
  div.appendChild(form);
  section.appendChild(div);

  return section;
};
