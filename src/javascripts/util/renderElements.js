export const render = (component)=>{
    let content_area = document.getElementById("content");

    //   clear DOM 
    while(content_area.firstElementChild){    
        content_area.removeChild(content_area.firstElementChild);
    }

    //   add new content to DOM 
    content_area.appendChild(component);
}