/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const api = {
  key: "f01500f5e1b6f459334d86739fccf2ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

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

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
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
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{todaysDate(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round((weather.main.temp) * 1.8 + 32)}°F
            </div>
            <div className="weather">{Math.round(weather.wind.speed)} MPH</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
