//навигация, меню
const button = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

function burgerMenu() {
  let burgerButton = document.querySelector(".burger");
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger_active");
  });
}
burgerMenu();

$(".reviews-slider").slick();
