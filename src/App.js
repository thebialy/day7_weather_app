/* eslint-disable no-unused-vars */
import React from 'react'

const api = {
  key: "f01500f5e1b6f459334d86739fccf2ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const dateCreator = (x) => {
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
        <div>
          <div className="location">New York City, US</div>
          <div className="date">{dateCreator(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
