$(function () {
  $("#nav_menu ul li a")
    .filter(function () {
      return this.href == location.href;
    })
    .parent()
    .addClass("active")
    .siblings()
    .removeClass("active");
  $("#nav_menu ul li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});

$(".advance_btn").click(function () {
  $(".hidden_div").toggleClass("show");
  $(this).toggleClass("active");
});
