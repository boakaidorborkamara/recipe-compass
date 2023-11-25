export const render = (component)=>{
    let content_area = document.getElementById("content");
    content_area.appendChild(component);
}