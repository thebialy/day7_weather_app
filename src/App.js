/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const api = {
  key: "f01500f5e1b6f459334d86739fccf2ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }

  const todaysDate = (x) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[x.getDay()];
    const date = x.getDate();
    const month = months[x.getMonth()];
    const year = x.getFullYear();

    return `${day}, ${month} ${date}, ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app cold') : 'app'}>
      <main>
        <div className="title"> Whats the weather in your city?</div>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar"
            placeholder="Enter city name"
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={getWeather}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className="weather-container">
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{todaysDate(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round((weather.main.temp) * 1.8 + 32)}°F
            </div>
            <div className="wind">Wind: {Math.round(weather.wind.speed)} MPH</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
