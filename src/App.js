import React from 'react'

const api = {
  key: "f01500f5e1b6f459334d86739fccf2ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
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
      </main>
    </div>
  );
}

export default App;
