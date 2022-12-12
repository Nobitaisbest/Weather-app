const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '039dc5d8a9mshae2d2d38e2f1f59p1fb45fjsn152f873150e5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response1 => response1.json())
    .then((response1) => {



        // cloud_pct.innerHTML = response1.cloud_pct
        temp.innerHTML = response1.temp
        temp2.innerHTML = response1.temp
        feels_like.innerHTML = response1.feels_like
        humidity.innerHTML = response1.humidity
        humidity2.innerHTML = response1.humidity
        min_temp.innerHTML = response1.min_temp;
        max_temp.innerHTML = response1.max_temp;
        wind_speed.innerHTML = response1.wind_speed;
        wind_speed2.innerHTML = response1.wind_speed;
        wind_degrees.innerHTML = response1.wind_degrees;
        sunrise.innerHTML = response1.sunrise;
        sunset.innerHTML = response1.sunset;


        console.log(response1)
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Boston");
getWeather("New York");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response1 => response1.json())
    .then((response1) => {
        console.log(response1)
        temp3.innerHTML = response1.temp
        feels_like3.innerHTML = response1.feels_like
        humidity3.innerHTML = response1.humidity
        max_temp3.innerHTML = response1.max_temp;
        min_temp3.innerHTML = response1.min_temp;
        wind_speed3.innerHTML = response1.wind_speed;
        wind_degrees3.innerHTML = response1.wind_degrees;
        sunrise3.innerHTML = response1.sunrise;
        sunset3.innerHTML = response1.sunset;

    })
    .catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response12 => response12.json())
    .then((response12) => {
        console.log(response12)
        temp31.innerHTML = response12.temp
        feels_like31.innerHTML = response12.feels_like
        humidity31.innerHTML = response12.humidity
        min_temp31.innerHTML = response12.min_temp;
        max_temp31.innerHTML = response12.max_temp;
        wind_speed31.innerHTML = response12.wind_speed;
        wind_degrees31.innerHTML = response12.wind_degrees;
        sunrise31.innerHTML = response12.sunrise;
        sunset31.innerHTML = response12.sunset;

    })
    .catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response122 => response122.json())
    .then((response122) => {
        console.log(response122)
        temp311.innerHTML = response122.temp
        feels_like311.innerHTML = response122.feels_like
        humidity311.innerHTML = response122.humidity
        min_temp311.innerHTML = response122.min_temp;
        max_temp311.innerHTML = response122.max_temp;
        wind_speed311.innerHTML = response122.wind_speed;
        wind_degrees311.innerHTML = response122.wind_degrees;
        sunrise311.innerHTML = response122.sunrise;
        sunset311.innerHTML = response122.sunset;

    })
    .catch(err => console.error(err));