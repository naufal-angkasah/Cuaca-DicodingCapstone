import '../component/weather-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const weatherListElement = document.querySelector('weather-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchWeather(searchElement.value);

      setTimeout(function() {
        renderResult(result);
      }, 2000);
    } catch (message) {
      setTimeout(function() {
        fallbackResult(message);
      }, 2000);
    }

  };

  const renderResult = results => {
    weatherListElement.weathers = results;
  };

  const fallbackResult = message => {
    weatherListElement.renderError(message);
  };

};

export default main;