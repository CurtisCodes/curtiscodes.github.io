const key = 'voLAJT622Hdo6un9zJqglYNY8DOEdGGg';

//get weather information
const getWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const weatherData = await response.json();

    return weatherData[0];

};


//get city information
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const weatherData = await response.json();

    return weatherData[0];

};




// //no longer using
// getCity('san clemente').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err));

