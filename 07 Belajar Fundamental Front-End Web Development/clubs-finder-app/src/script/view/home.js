import Utils from '../utils.js';
import Clubs from '../data/local/clubs.js';

const home = () => {
  const searchFormElement = document.querySelector('search-bar');

  const clubListContainerElement = document.querySelector('#clubListContainer');
  const clubQueryWaitingElement = clubListContainerElement.querySelector('.query-waiting');
  const clubLoadingElement = clubListContainerElement.querySelector('.search-loading');
  // const clubListElement = clubListContainerElement.querySelector('.club-list');
  // const listElement = clubListElement.querySelector('.list');
  const clubListElement = clubListContainerElement.querySelector('club-list');

  const showSportClub = (query) => {
    showLoading();

    const result = Clubs.searchClub(query);
    displayResult(result);

    showClubList();
  };

  const onSearchHandler = (event) => {
    event.preventDefault();

    // const query = event.target.elements.name.value;
    const { query } = event.detail;
    showSportClub(query);
    
  };

  const displayResult = (clubs) => {
    // const clubItems = clubs.map((club) => {
      const clubItemElements = clubs.map((club) => {
        const clubItemElement = document.createElement('club-item');
        clubItemElement.club = club;
        return clubItemElement;
    });

    // listElement.innerHTML = clubItems.join('');
    Utils.emptyElement(clubListElement);
    clubListElement.append(...clubItemElements);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubListElement);
  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showQueryWaiting = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubQueryWaitingElement);
  };

  // showSportClub();
  // searchFormElement.addEventListener('submit', onSearchHandler);
  searchFormElement.addEventListener('search', onSearchHandler);
  showQueryWaiting();
};

export default home;
