
let API_DATA= "a8e71c9932b20c4ceb0ceb0ad183e6a83bb";
weather_data = (city)=> {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const URL_REST = `${URL}?q=${city}&applied=${API_DATA}&units=imperial`
}