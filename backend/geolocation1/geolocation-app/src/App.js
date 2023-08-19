import React from "react";
import GeolocationCapture from "./components/GeolocationCapture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Geolocation Capture</h1>
      </header>
      <main>
        <GeolocationCapture />
      </main>
    </div>
  );
}

export default App;
