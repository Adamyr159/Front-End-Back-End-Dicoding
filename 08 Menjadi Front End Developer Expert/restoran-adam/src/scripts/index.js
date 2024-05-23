import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css";
import "../styles/responsive.css";
import swRegister from './utils/sw-register';
import App from './views/app';
// import data from '../public/data/DATA.json';

console.log("Hello Coders! :)");

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", async () => {
  app.renderPage();
  swRegister();
});
// const restaurantList = document.getElementById("restaurant-list");

// data.restaurants.forEach((restaurant) => {
//   const restaurantElement = document.createElement("div");
//   restaurantElement.classList.add("restaurant");
//   const firstTwoSentences = restaurant.description.split('.').slice(0, 2).join('.') + '.';
  
//   restaurantElement.innerHTML = `
//   <a href="${restaurant.id}">
//     <img src="${restaurant.pictureId}" alt="${restaurant.name}">
//   </a>
//     <h2 tabindex="1">${restaurant.name}</h2>
//     <p class="description">${firstTwoSentences}</p>
//     <p><span>City:</span> ${restaurant.city}</p>
//     <p><span>Rating:</span> ${restaurant.rating}</p>
//   `;

//   restaurantList.appendChild(restaurantElement);
// });


// const hamburgerButtonElement = document.querySelector('#hamburger');
// const drawerElement = document.querySelector('#drawer');
// const heroElement = document.querySelector('.hero');
 
// hamburgerButtonElement.addEventListener('click', event => {
//   drawerElement.classList.toggle('open');
//   event.stopPropagation();
//   event.preventDefault();
// });

// document.addEventListener('click', event => {
//   if (drawerElement.classList.contains('open' && event.target !== hamburgerButtonElement)) {
//     drawerElement.classList.remove('open');
//   }
// });

// heroElement.addEventListener('click', event => {
//   drawerElement.classList.remove('open');
//   event.stopPropagation();
// });