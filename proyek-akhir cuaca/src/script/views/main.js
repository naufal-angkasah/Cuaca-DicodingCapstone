import '../component/weather-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('weather-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }

  };

  const renderResult = results => {
    clubListElement.movies = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

};

export default main;