import React, { useState, useEffect } from 'react';
import ZipCodeForm from './ZipCodeForm';
import LocationInfo from './LocationInfo';


const App = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
  
      if (response.status === 200) {
        const data = await response.json();
        setLocation(data);
        setError(null); 
      } else {
        setError(new Error(`Invalid Postal Code: ${postalCode}`));
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  

  const clearInfo = () => {
    setLocation(null);
    setError(null);
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Zip Code Information App</h1>
      <ZipCodeForm onSubmit={fetchLocationInfo} />
      <LocationInfo
        location={location}
        clearInfo={clearInfo}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
