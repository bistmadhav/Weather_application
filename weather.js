
let API_data = "a8e71c9932b20c4ceb0aed183e6a83bb";

weather_data = (city)=> {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const URL_complete = `${URL}?q=${city}&appid=${API_data}&units=imperial`;
    const promise_data = fetch(URL_complete);
    return promise_data.then((response)=>{
        return response.json();
    })
}

user_input_city = () => {

const city_from_user = document.getElementById('city_user_input').value;
weather_data(city_from_user)
.then((response)=>{
    console.log(response);
    data_to_output(response);
}).catch((error)=>{
 console.log(error);
 console.log("Problem in receiving the data")
})
}
//console.log(weather_data("arlington"));

data_to_output = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
    document.getElementById("weather-output").classList.add('visible');
  }
  
