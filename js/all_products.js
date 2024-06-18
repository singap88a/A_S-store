// open & close filter//

var filter =document.querySelector(".filter")
function open_close_filter(){
  filter.classList.toggle("active")
}



fetch('js/product.json')
.then(Response => Response.json() )
.then(data => {
    const products_dev = document.getElementById("products_dev");
    let listProductHTML = document.querySelector('.listProduct');
     
      
    all_products_json = data

    // //////////2222222//////////////

    data.forEach(product  => {
   
      const old_price_pargrahp = product.old_price ? ` <p class="old_price">$${product.old_price}</p>` : "";
          const percent_disc_div = product.old_price ?`<span class="sale_present">%${Math.floor((product.old_price - product.price)/ product.old_price * 100) }</span> ` : "";          products_dev.innerHTML +=
          
          
          
          `
            

<div id="products_dev" class="products_dev">
      <div class="listProduct">         
            <div class="item">
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
              ${old_price_pargrahp}
            </div>
               

        </div>
          </div>



 
            `;



          
            
       
        
    });



    
 

});