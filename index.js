var menu = document.querySelector("#toggle");
var allContainer = document.querySelectorAll(".container");
var itemNav = menu.addEventListener("click", function(){
     for(var i = 0; i < allContainer.length; i++){
          allContainer[i].classList.toggle("active");
     }
})