import '../../component/search-bar.js';
import DataSource from '../../data/data-source.js';

const Home = {
    async render() {
      return `
      <div class="content-header">
        <h2 class="content-header-title">Temukan Kondisi Cuaca</h1>
      </div>
        <search-bar></search-bar>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
        <weather-list class="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"></weather-list>
        `;
    },
  
    async afterRender() {
        const searchElement = document.querySelector('search-bar');
        const weatherListElement = document.querySelector('weather-list');
        const loadingIndicator = document.querySelector('.lds-facebook');
      
        const onButtonSearchClicked = async () => {
          loadingIndicator.style.display = 'inline-block';

          try {
            const result = await DataSource.searchWeather(searchElement.value);
      
            setTimeout(function() {
              loadingIndicator.style.display = 'none';
              renderResult(result);
            }, 2000);
          } catch (message) {
            setTimeout(function() {
              loadingIndicator.style.display = 'none';
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
      
        searchElement.clickEvent = onButtonSearchClicked;
    },
  };
  
  export default Home;