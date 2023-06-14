class WeatherItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set location(location) {
    this._location = location;
    this.render();
  }

  set current(current) {
    this._text = current.condition.text;
    this._icon = current.condition.icon;
    this._temp_c = current.temp_c;
    this._wind_mph = current.wind_mph;
    this._humidity = current.humidity;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css");
        .img-custom {
          width: 100%;
          height: 80%;
        }

        .content-card-container {
          padding: 2rem;
          margin: 1rem 0;
          box-shadow: 0px 6px 8px 1px rgb(0 0 0 / 60%);
          width: 100%;
          border-radius: 10px;
          display: flex;
          overflow: hidden;
          background-color: white;
          flex-direction: column;
          align-items: center;
        }

        main .content-weather-header {
          width: 100%;
          margin: 20px auto;
          text-align: center;
        }

        .content-weather-title {
          font-size: 1.5rem;
          text-align: center;
          color: black
        }

        .content-card-list {
          border-top: 1px solid #be1919;
          border-bottom: 1px solid #be1919;
          grid-template-columns: auto auto;
          display: grid;
          gap: 18px;
          width: 90%;
          margin: 18px auto;
          padding-bottom: 8px;
          padding-top: 1rem;
          justify-content: space-around;
          justify-items: center;
          align-items: center;
        }
        
        .content-weather-icon{
          width: 128px;
        }

        .content-weather-condition{
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media screen and (max-width: 1600px){
          .content-card-container {
            width: 800px;
          }
        }
  
        @media screen and (max-width: 850px){
          .content-card-container {
            width: 600px;
          }
        }
        
        @media screen and (max-width: 650px){
          .content-card-container {
            width: 440px;
          }
        }
  
        @media screen and (max-width: 500px){
          .content-card-container {
            width: 340px;
          }
        }
  
        @media screen and (max-width: 330px){
          .content-card-container {
            width: auto;
          }
        }
        
    </style>
    <div class="content-card-container">
    <div class="content-weather-header">
      <h2 class="content-weather-title">${this._location.name} Weather Forecast ${this._location.region}, ${this._location.country}</h2>
    </div>
    <div class="content-card-list">
      <div class="content-weather-condition">
        <img class="content-weather-icon" src='${this._icon ?? ""}'>
        <p>${this._text}</p>
      </div>
    
      <div class="content-weather-description">
        <p>Suhu ${this._temp_c} °C </p>
        <p>Kecepatan Angin ${this._wind_mph} m/Jam </p>
        <p>Kelembapan ${this._humidity} % </p>
      </div>
    </div>
    <p>Kamu mencari pada ${this._location.localtime} </p>
    </div>
    `;
  }
}

customElements.define('weather-item', WeatherItem);