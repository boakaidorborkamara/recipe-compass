
    let product_area = document.getElementById('productArea');
    let showcase_area = document.getElementById('showcaseArea');

    fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
    .then(res => res.json())
    .then((data)=>{
        // console.log(data);
        let all_details = data;
        console.log(all_details);
        let all_data_values = Object.values(all_details.recipes);
        console.log(all_data_values);
        
        all_data_values.forEach(ele => {
            //creating new html element for each element
            let dish = document.createElement('div');
            let dish_image = document.createElement('div');
            let image = document.createElement('img');
            


            let dish_detail = document.createElement('div');

            let title = document.createElement('p');
            let title_text = document.createTextNode(ele.title);
            title.appendChild(title_text);

            let publisher = document.createElement('p');
            let publisher_text = document.createTextNode(ele.publisher);
            publisher.appendChild(publisher_text);

            let id = document.createElement('p');
            let id_text = document.createTextNode(ele.recipe_id);
            id.appendChild(id_text);



            //adding content to each element created by appending child
            dish_image.appendChild(image);
            dish.appendChild(dish_image);
            dish.appendChild(dish_detail);
            product_area.appendChild(dish);

            dish_detail.appendChild(title);
            dish_detail.appendChild(publisher);
            dish_detail.appendChild(id);

            
           
           

            //add class to indivdual element created by JS to enable CSS styling to take effect
            dish.setAttribute('class', 'dish');
            dish_image.setAttribute('class', 'dish_image');
            dish_detail.setAttribute('class', 'dish_detail');
            title.setAttribute('class', 'title');
            image.setAttribute('src' , ele.image_url);
           
        });

        let showcase_image = document.createElement('img');
            showcase_image.setAttribute('src', all_data_values[26].image_url);
            showcase_image.setAttribute('class','large_product_image')
            showcase_area.appendChild(showcase_image);
        
           
    
      
    })
   
