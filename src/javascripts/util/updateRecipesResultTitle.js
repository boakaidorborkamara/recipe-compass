export const updateRecipesResultTitle = (prop) => {
  let title_ele = document.getElementById("searched-item");
  let text_content = `${prop}`;
  console.log(text_content);
  title_ele.innerText = text_content;
};
