const hamburgerMenuBtn = document.querySelector(".hamburger-menu-icon > i");

function showMenu(e) {
  console.log(e.target)
}

hamburgerMenuBtn.addEventListener('click', showMenu)