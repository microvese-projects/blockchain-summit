const hamburgerMenuBtn = document.querySelector('.hamburger-menu-icon > i');
const closeHamburger = document.querySelector('#close-hamburger > i');
const popupMenu = document.querySelector('#popup-menu');

function showMenu() {
  popupMenu.classList.toggle('hide');
}

function closeHamburgerMenu() {
  popupMenu.classList.toggle('hide');
}

hamburgerMenuBtn.addEventListener('click', showMenu);
closeHamburger.addEventListener('click', closeHamburgerMenu);