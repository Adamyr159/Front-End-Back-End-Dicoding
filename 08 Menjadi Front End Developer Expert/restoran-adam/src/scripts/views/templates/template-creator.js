import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container">
    <div class="row">
        <div class="column image-column">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image" crossorigin="anonymous">
        </div>
        <div class="column details-column">
            <h2 class="resto-name">${restaurant.name}</h2>
            <p class="rating"><strong>Rating:</strong> ${restaurant.rating}</p>
            <p class="categories"><strong>Kategori:</strong> : <span>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</span></p>
            <p class="city"><strong>Kota:</strong> ${restaurant.city}</p>
            <p class="address"><strong>Alamat:</strong> ${restaurant.address}</p>
        </div>
            <p class="description">${restaurant.description}</p>
    </div>
    <div class="row">
        <div class="column menu-column">
            <h2>Menu Makanan</h2>
            ${restaurant.menus.foods
    .map(
      (food) => `
              <ul class="menu-list">
                  <li class="menu-item">${food.name}</li>
              </ul>
            `,
    )
    .join('')}
        </div>
        <div class="column menu-column">
            <h2>Menu Minuman</h2>
            ${restaurant.menus.drinks
    .map(
      (drink) => `
              <ul class="menu-list">
                  <li class="menu-item">${drink.name}</li>
              </ul>
            `,
    ).join('')}
        </div>
    </div>
    <div class="row">
      <h2 class="review-customer-heading">Pendapat Mereka</h2>
        <div class="column review-column">
            ${restaurant.customerReviews
    .map(
      (cust) => `
            <div class="review-card">
                <h5 class="review-title">${cust.name} ⭐️5</h5>
                <p class="review-text">${cust.review}</p>
                <p class="review-date">${cust.date}</p>
            </div>
            `,
    ).join('')}
        </div>
    </div>
  </div>
  
    `;
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
