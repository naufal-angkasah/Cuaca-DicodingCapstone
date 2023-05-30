import './weather-item.js';

class WeatherList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set weathers(weathers) {
    this._location = weathers[0];
    this._current = weathers[1];
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    for(let i = 0; i < 1; i++){
      const weatherItemElement = document.createElement('weather-item');
      weatherItemElement.location = this._location
      weatherItemElement.current = this._current
      this.shadowDOM.append(weatherItemElement)
    }
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
    </style>
    <div class="col-md-4"
    <div class="card">
    </div>
  </div>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('weather-list', WeatherList);
