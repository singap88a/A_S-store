 


    //////details item img///////

let bigImage = document.getElementById("bigImg")
function changImage(img){
  bigImage.src = img
}

  //////end details item img///////


  fetch('js/product.json')
  .then(response => response.json())
  
  .then(data =>{
     
 
  const swiper_items_sale22 = document.getElementById("swiper_items_sale22")
 
   
  
      data.forEach(product => {
    
         
            
            swiper_items_sale22.innerHTML +=`
    
                     <div class="item swiper-slide">
                         
                            <div class="img_product">
                             <img src=" ${product.img}" alt="">
                                <img class="img_hover" src=" ${product.img_hover}" alt="">
                     </div>
                                    <a href="item_detels.html">${product.name}</a> 
  
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-regular fa-star-half-stroke"></i>
                                   <i class="fa-regular fa-star"></i>
                            </div>
                              <div class="price">$${product.price}</div>
                       <div class="i_cart">
                          <i  onclick="addCart(${product.id})"class="fa-solid fa-cart-plus"></i>
                          <i class="fa-solid fa-heart"></i>      
                    
                        <i class="fa-solid fa-share"></i> 
                        </div>
                    
                    </div>
        `
        });
  
  
  }) 














