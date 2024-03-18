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
});
