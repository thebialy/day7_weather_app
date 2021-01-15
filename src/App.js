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
      <head>  
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </head>
      <main>
        <div className="title"> What's the weather in your city?</div>
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
        <div className={(weather.main.temp > 16) ? 'weather-container' : 'cold-weather-container'}>
          <div className="background">
            <div className={(weather.main.temp > 16) ? 'warm1' : 'cold1'}></div>
            <div className={(weather.main.temp > 16) ? 'warm2' : 'cold2'}></div>
            <div className={(weather.main.temp > 16) ? 'warm3' : 'cold3'}></div>
            <div className="content">
              <h1 className="condition"> {(weather.main.temp >16) ? 'Warm' : 'Cold'}</h1>
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">
                {todaysDate(new Date())}
              </div>
              <h1 className="temp">
                {Math.round((weather.main.temp) * 1.8 + 32)}°F
              </h1>
            </div>         
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
