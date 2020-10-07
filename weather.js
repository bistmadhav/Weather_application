
let API_data = "a8e71c9932b20c4ceb0aed183e6a83bb";

weather_data = (city)=> {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const URL_complete = `${URL}?q=${city}&appid=${API_data}&units=imperial`;
    const promise_data = fetch(URL_complete);
    return promise_data.then((response)=>{
        return response.json();
    })
}
//console.log(weather_data("arlington"));
