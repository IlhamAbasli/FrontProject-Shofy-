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
  
  
  
  
});
