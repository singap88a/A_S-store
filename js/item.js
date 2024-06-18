 

fetch('js/product.json')
.then(response => response.json())

.then(data =>{
   
const swiper_items_sale = document.getElementById("swiper_items_sale")
const swiper_items_sale2 = document.getElementById("swiper_items_sale2")
const swiper_items_sale3 = document.getElementById("swiper_items_sale3")
 



data.forEach(product => {
    const old_price_pargrahp = product.old_price ? ` <p class="old_price">$${product.old_price}</p>` : "";
         
    const percent_disc_div = product.old_price ?`<span class="sale_present">%${Math.floor((product.old_price - product.price)/ product.old_price * 100) }</span> ` : ""; 
    if(product.old_price)
        
        swiper_items_sale.innerHTML +=`

                 <div class="item swiper-slide">
                          ${percent_disc_div}
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
                <p class="old_price">$${product.old_price}</p>
                </div>
    `
    });







    data.forEach(product => {
  
       
          
          swiper_items_sale2.innerHTML +=`
  
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





      data.forEach(product => {
  
       
          
        swiper_items_sale3.innerHTML +=`

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