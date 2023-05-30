import '../../component/search-bar.js';
import DataSource from '../../data/data-source.js';

const Home = {
    async render() {
      return `
      <div class="content-header">
        <h2 class="content-header-title">Temukan Kondisi Cuaca</h1>
      </div>
        <search-bar></search-bar>
        <weather-list class="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"></weather-list>
        `;
    },
  
    async afterRender() {
        const searchElement = document.querySelector('search-bar');
        const weatherListElement = document.querySelector('weather-list');
      
        const onButtonSearchClicked = async () => {
          try {
            const result = await DataSource.searchWeather(searchElement.value);
            renderResult(result);
          } catch (message) {
            fallbackResult(message);
          }
      
        };
      
        const renderResult = results => {
          weatherListElement.weathers = results;
        };
      
        const fallbackResult = message => {
          weatherListElement.renderError(message);
        };
      
        searchElement.clickEvent = onButtonSearchClicked;
    },
  };
  
  export default Home;