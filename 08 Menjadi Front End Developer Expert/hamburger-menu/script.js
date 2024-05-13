const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const containerHamburgerElement = document.querySelector('.container-hamburger');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

containerHamburgerElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});