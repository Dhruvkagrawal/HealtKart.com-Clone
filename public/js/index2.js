
///////   add_to_cart  function ///////////////

function addtoCart(product) {
      


    if (localStorage.getItem("healthkart_cart") === null) {
        localStorage.setItem("healthkart_cart", JSON.stringify([]));
    }
    let array = JSON.parse(localStorage.getItem("healthkart_cart"));
    let present  = false;
    
      array.forEach((pro)=>{
        if(pro.name == product.name)
        {  
            pro["quantity"]++;
            present = true;
        }
     })
    if(present)
    {
    localStorage.setItem("healthkart_cart", JSON.stringify(array));
    }else{
      product["quantity"] = 1;
      array.push(product);
      localStorage.setItem("healthkart_cart", JSON.stringify(array));
    }
    }
    ///////   add_to_cart  function ///////////////
    
    ///// product page /////////
    
    function productPage(){
        window.location.href = 'products.html'
    }
    
    /// product page //////////