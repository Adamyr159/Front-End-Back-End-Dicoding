import TheMovieDbSource from "../../data/themoviedb-source";
import { createMovieItemTemplate } from "../templates/template-creator";

const Upcoming = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">UpComing in Cinema</h2>
            <div id="movies" class="movies">
            </div>
        </div>
      `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upComingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach(movie => {
        moviesContainer.innerHTML += createMovieItemTemplate(movie);        
    });
    // TODO: tampilkan movies di dalam DOM
  },
};

export default Upcoming;
