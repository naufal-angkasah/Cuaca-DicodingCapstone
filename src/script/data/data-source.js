class DataSource {
  static searchWeather(keyword) {
    let search = `http://api.weatherapi.com/v1/current.json?key=8b7703863654463cbeb40020232405&q=${keyword}&aqi=yes`
    return fetch(`${search}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson) {
            return Promise.resolve([responseJson.location,responseJson.current]);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;