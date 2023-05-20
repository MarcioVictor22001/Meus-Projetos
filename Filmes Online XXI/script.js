let toggle = document.getElementById("mobile-btn-menu");
const navTop = document.querySelector(".header-main-nav");

toggle.addEventListener("click", function () {
  navTop.classList.toggle("active");
});

// Scroll
let btnLeft = document.querySelectorAll(".btnLeft");
let btnRight = document.querySelectorAll(".btnRight");

let posterItem = document.querySelectorAll(".poster-container");

btnLeft.forEach(function (btn, index) {
  btn.addEventListener("click", (event) => {
    let posterContainer = posterItem[index];
    posterContainer.scrollLeft += 250;
  });
});

btnRight.forEach(function (btn, index) {
  btn.addEventListener("click", (event) => {
    let posterContainer = posterItem[index];
    posterContainer.scrollLeft -= 250;
  });
});
