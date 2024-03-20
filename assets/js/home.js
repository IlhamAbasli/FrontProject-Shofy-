$(function () {
  $(".right-side li .content").click(function () {
    $(this).next().toggleClass("menu-down");
    $(this).parent().siblings().find(".menu").removeClass("menu-down");
  });

  $(".search-area .selector").click(function () {
    $(this).children().first().toggleClass("rotate");
    $(this).next().toggleClass("menu-down");
    $(this).parent().siblings().find(".menu").removeClass("menu-down");
  });


  $(".all-categories").click(function(){
    $(".categories").toggleClass("d-none")
  })


  $(".products-nav").mouseenter(function(){
    $(".submenu").addClass("submenu-show");
    $(".submenu").removeClass("submenu-close");
  })

  $(".products-nav").mouseleave(function(){
    $(".submenu").removeClass("submenu-show");
    $(".submenu").addClass("submenu-close");
  })



  //#region slider-area
  
  $("#slider-area .controllers .left").click(function(event){
    event.preventDefault();
    let activeSlider = $(".active-slider");
    let activeSliderImage = $(".active-slider-image");
    let dotActive = $(".active-dot");


    if(activeSlider.prev().length == 0 && activeSliderImage.prev().length == 0 && dotActive.next().length == 0){
        return;
      }else{
        activeSlider.removeClass("active-slider");
        activeSliderImage.removeClass("active-slider-image");
        dotActive.removeClass("active-dot");
    
        activeSlider.prev().addClass("active-slider");
        activeSliderImage.prev().addClass("active-slider-image");
        dotActive.prev().addClass("active-dot");
      }

  })

  $("#slider-area .controllers .right").click(function(event){
    event.preventDefault();
    let activeSlider = $(".active-slider");
    let activeSliderImage = $(".active-slider-image");
    let dotActive = $(".active-dot");

    if(activeSlider.next().length == 0 && activeSliderImage.next().length == 0 && dotActive.next().length == 0){
        return;
      }else{
        activeSlider.removeClass("active-slider");
        activeSliderImage.removeClass("active-slider-image");
        dotActive.removeClass("active-dot");
    
        activeSlider.next().addClass("active-slider");
        activeSliderImage.next().addClass("active-slider-image");
        dotActive.next().addClass("active-dot");
      }
  })

  $("#slider-area .pagination .first-slide-dot").click(function(){
    $(this).addClass("active-dot");
    $(this).siblings().removeClass("active-dot");
    $(".first-slide").addClass("active-slider");
    $(".first-slide").siblings().removeClass("active-slider");
    $(".first-slider-image").addClass("active-slider-image");
    $(".first-slider-image").siblings().removeClass("active-slider-image");
  })



  $("#slider-area .pagination .second-slide-dot").click(function(){
    $(this).addClass("active-dot");
    $(this).siblings().removeClass("active-dot");
    $(".second-slide").addClass("active-slider");
    $(".second-slide").siblings().removeClass("active-slider");
    $(".second-slider-image").addClass("active-slider-image");
    $(".second-slider-image").siblings().removeClass("active-slider-image");
  })


  $("#slider-area .pagination .third-slide-dot").click(function(){
    $(this).addClass("active-dot");
    $(this).siblings().removeClass("active-dot");
    $(".third-slide").addClass("active-slider");
    $(".third-slide").siblings().removeClass("active-slider");
    $(".third-slider-image").addClass("active-slider-image");
    $(".third-slider-image").siblings().removeClass("active-slider-image");
  })



  //#endregion
  

  //#region sidebar
  $(".bars").click(function(e){
    e.preventDefault();
    $(".right-side-menu").addClass("opened");
    $(".right-side-menu").removeClass("closed");
  })

  $(".close").click(function(e){
    e.preventDefault();
    $(".right-side-menu").removeClass("opened");
    $(".right-side-menu").addClass("closed");
  })
  
  //#endregion


  //#region product-tabmenu

  $("#products .tab-categories .new-products").click(function(e){
    e.preventDefault();
    $(this).addClass("active");
    $("#products .tab-categories .featured-products").removeClass("active");
    $("#products .tab-categories .top-products").removeClass("active");
    $("#products .new-products-list").removeClass("d-none");
    $("#products .featured-products-list").addClass("d-none");
    $("#products .top-products-list").addClass("d-none");
  })


  $("#products .tab-categories .featured-products").click(function(e){
    e.preventDefault();
    $(this).addClass("active");
    $("#products .tab-categories .new-products").removeClass("active");
    $("#products .tab-categories .top-products").removeClass("active");
    $("#products .new-products-list").addClass("d-none");
    $("#products .featured-products-list").removeClass("d-none");
    $("#products .top-products-list").addClass("d-none");
  })


  $("#products .tab-categories .top-products").click(function(e){
    e.preventDefault();
    $(this).addClass("active");
    $("#products .tab-categories .featured-products").removeClass("active");
    $("#products .tab-categories .new-products").removeClass("active");
    $("#products .new-products-list").addClass("d-none");
    $("#products .featured-products-list").addClass("d-none");
    $("#products .top-products-list").removeClass("d-none");
  })


  //#endregion
  


  //#region add-to-cart
  
  let products = [];
  let wishlist = []

  if(JSON.parse(localStorage.getItem("products")) == null){
    localStorage.setItem("products",JSON.stringify(products));
  }else{
    products = JSON.parse(localStorage.getItem("products"));
  }


  if(JSON.parse(localStorage.getItem("wishlist")) == null){
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
  }else{
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }


  function getBasketCount(products) {
    let count = 0;
    if(products.length != 0){
      for (const product of products) {
        count += product.count;
      }
    }

    $("#header-mid .actions .cart-count").html(count);
  }

  function getWishlistCount(products) {
    let count = 0;
    if(wishlist.length != 0){
      for (const product of products) {
        count++;
      }
    }

    $("#header-mid .actions .wishlist-count").html(count);
  }

  function checkWishlist(wishlist){
    let products = $(".product");
    for (const product of products) {
      for (const item of wishlist) {
        if(product.getAttribute("data-id") == item.id){
          product.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.setAttribute("class","add-to-wishlist active-wishlist");
        }
      }
    }
  }

  checkWishlist(wishlist)
  getBasketCount(products); 
  getWishlistCount(wishlist);

  $("#products .product .product-action .add-to-cart").click(function(e){
    e.preventDefault();
    let productId = $(this).parent().parent().parent().parent().parent().attr("data-id");
    let productImage = $(this).parent().parent().parent().prev().attr("src");
    let productName = $(this).parent().parent().parent().parent().next().children().first().next().html();
    let productPrice = $(this).parent().parent().parent().parent().next().children().last().children().last().children().first().html();


    if($(this).parent().parent().parent().parent().parent().hasClass("out-of-stock")){
      toastr["error"](`${productName} out of stock`)
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      return;
    }


    let existProduct = products.find(m => m.id == parseInt(productId))
    
    if(existProduct != undefined){
      existProduct.count++;
    }else{
      products.push({
        id: parseInt(productId),
        image: productImage,
        name: productName,
        price: parseFloat(productPrice),
        count: 1
      })
    }

    localStorage.setItem("products",JSON.stringify(products));

    toastr["success"](`${productName} added to cart`)
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    getBasketCount(products);
  })

  $("#products .product .product-action .add-to-wishlist").click(function(e){
    e.preventDefault();
    let productId = $(this).parent().parent().parent().parent().parent().attr("data-id");
    let productImage = $(this).parent().parent().parent().prev().attr("src");
    let productName = $(this).parent().parent().parent().parent().next().children().first().next().html();
    let productPrice = $(this).parent().parent().parent().parent().next().children().last().children().last().children().first().html();

    let existProduct = wishlist.find(m => m.id == parseInt(productId))
    
    if(existProduct != undefined){
      toastr["error"](`${productName} remove to wishlist`)
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    return;
    }else{
      wishlist.push({
        id: parseInt(productId),
        image: productImage,
        name: productName,
        price: parseFloat(productPrice),
        count: 1
      })
      $(this).addClass("active-wishlist");
    }
    
    
    localStorage.setItem("wishlist",JSON.stringify(wishlist));

    toastr["success"](`${productName} added to wishlist`)
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    getWishlistCount(wishlist);
  })


  //#endregion
  
  
  
});
