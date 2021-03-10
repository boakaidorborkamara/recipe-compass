
    let product_area = document.getElementById('productArea');
    let showcase_area = document.getElementById('showcaseArea');

    fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
    .then(res => res.json())
    .then((data)=>{
        let all_details = data;
        let all_data_values = Object.values(all_details.recipes);

        let showcase_image = document.createElement('img');
            showcase_image.setAttribute('src', all_data_values[13].image_url);
            showcase_image.setAttribute('class','large_product_image')
            showcase_area.appendChild(showcase_image);
    })
    .catch(err=>{
        if(err){
            console.log(err);
        }
    })
   
