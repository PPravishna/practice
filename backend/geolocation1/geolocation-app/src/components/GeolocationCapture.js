import React, { useState } from "react";

function GeolocationCapture() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchLocationName(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError("Error getting geolocation: " + error.message);
        }
      );
    } else {
      setError("Geolocation not available in this browser.");
    }
  };

  const fetchLocationName = async (lat, lng) => {
    // In a real-world scenario, you could use reverse geocoding API or other methods to fetch location name based on latitude and longitude.
    // This example simply displays the coordinates.
    setLocation(`Latitude: ${lat}, Longitude: ${lng}`);
  };

  return (
    <div>
      <button onClick={handleGetLocation}>Get Location</button>
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Location: {location}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GeolocationCapture;
