const hamburgerMenuBtn = document.querySelector(".hamburger-menu-icon > i");
const closeHamburger = document.querySelector("#close-hamburger > i");
const popupMenu = document.querySelector("#popup-menu");

function showMenu(e) {
  popupMenu.classList.toggle("hide");
}

function closeHamburgerMenu(e) {
  popupMenu.classList.toggle("hide");
}

hamburgerMenuBtn.addEventListener('click', showMenu);
closeHamburger.addEventListener("click", closeHamburgerMenu)