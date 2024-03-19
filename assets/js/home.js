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
});
