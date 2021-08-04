const navToggle = document.querySelector(".nav-toggle");
const topNav = document.querySelector("#top-nav");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    
  links.classList.toggle("show-links");
  
});


links.addEventListener("click", function(){
    links.classList.remove("show-links");

});





const modal = document.getElementById('my-modal');
const images = document.querySelectorAll('.img-gallery-item');
const modalImg = document.getElementById("img01");

for(let i = 0; i< images.length; i++ ){
    images[i].addEventListener('click', function(){
        modal.style.display ="block";
        modalImg.src = this.src;
    });
};


const span = document.querySelector(".close");

span.addEventListener("click", function(){
    modal.style.display = "none";
  });
