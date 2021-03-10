
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

        let showcase_image = document.createElement('img');
            showcase_image.setAttribute('src', all_data_values[13].image_url);
            showcase_image.setAttribute('class','large_product_image')
            showcase_area.appendChild(showcase_image);
        
           
    
      
    })
   
