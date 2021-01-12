/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const api = {
  key: "f01500f5e1b6f459334d86739fccf2ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  

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
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar"
            placeholder="Enter city name"
          />
        </div>
        <div className="location-box">
          <div className="location">Nashville, TN</div>
          <div className="date">{todaysDate(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            30°F
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
