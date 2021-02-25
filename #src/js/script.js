
const btnMenu = document.querySelector(".header__menu-btn");
const btnMenuClose = document.querySelector(".menu-fixed__exit");

const fixedMenu = document.querySelector(".menu-fixed");

// показываем меню при клике на мобилках
btnMenu.addEventListener("click", function (evt) {
  evt.preventDefault();

  fixedMenu.classList.add("menu-fixed--active");
})

// скрываем меню при клике на мобилках
btnMenuClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  fixedMenu.classList.remove("menu-fixed--active");
})

// инициализируем галерею
window.addEventListener('load', function() {
  baguetteBox.run('.staging-list');
});
