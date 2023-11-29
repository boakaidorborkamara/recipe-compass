export const fetchRecipes = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
