import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from '../public/data/DATA.json';

console.log("Hello Coders! :)");

const restaurantList = document.getElementById("restaurant-list");

data.restaurants.forEach((restaurant) => {
  const restaurantElement = document.createElement("div");
  restaurantElement.classList.add("restaurant");
  const firstTwoSentences = restaurant.description.split('.').slice(0, 2).join('.') + '.';
  
  restaurantElement.innerHTML = `
    <h2 tabindex="1">${restaurant.name}</h2>
    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
    <p>${firstTwoSentences}</p>
    <p><span>City:</span> ${restaurant.city}</p>
    <p><span>Rating:</span> ${restaurant.rating}</p>
  `;

  restaurantList.appendChild(restaurantElement);
});


const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const heroElement = document.querySelector('.hero');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

heroElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});