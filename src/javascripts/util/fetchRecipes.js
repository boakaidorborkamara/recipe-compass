export const fetchRecipes = async (url)=>{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
}