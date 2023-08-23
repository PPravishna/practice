import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'Google key';

const containerStyle = {
  width: '400px',
  height: '400px',
};

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Fetch latitude and longitude from the API using native fetch
    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
      .then(response => response.json())
      .then(data => {
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        setAddress(data.city + ', ' + data.countryName);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Reverse Geocoding and Google Maps App</h1>
      {latitude !== '' && longitude !== '' && (
        <div>
          <p>Location: {address}</p>
          <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
              zoom={10}
            >
              <Marker position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }} />
            </GoogleMap>
          </LoadScript>
        </div>
      )}
    </div>
  );
}

export default App;
