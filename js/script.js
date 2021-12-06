"use strict";

var list = document.getElementById("nav_active");
var listItem = list.getElementsByClassName("nav_list_item");

for (var i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} // -------------------Slide-Start-----------------------


$(document).ready(function () {
  $('.slideshow_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    vertical: false
  });
}); // -------------------Slide-End--------------------------
//--------------------Reponsive-Menu-------------------------------

var reponsive_menu = $('.reponsive_menu');
var btn_menu = $('.btn_menu');
var overlay_menu = $('.overlay_menu');
btn_menu.click(function (e) {
  reponsive_menu.css({
    'left': '0'
  });
  overlay_menu.css({
    'left': '0',
    'visibility': 'visible'
  }); // $('body').css({
  //   'margin-left':'300px',
  // })
});
overlay_menu.click(function () {
  reponsive_menu.css({
    'left': '-100%'
  });
  $(this).css({
    'left': '-100%',
    'visivility': 'hidden'
  }); // $('body').css({
  //   'margin-left':'0',
  // })
});