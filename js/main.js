//  js Toggle sidebar

var icon = document.querySelector(".fa-bars");
var cross = document.querySelector(".fa-xmark");
var nav = document.querySelector(".menu .list-elements");

icon.addEventListener("click", function(){
  nav.classList.add("active");
});

cross.addEventListener("click", function(){
    nav.classList.remove("active");
});

window.addEventListener("scroll", function(){
    nav.classList.remove("active");
});