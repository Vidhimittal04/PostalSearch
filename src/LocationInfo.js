
import React from 'react';
import './LocationInfo.css'; 
import { Modal, Button, Form, Spinner } from 'react-bootstrap';

const LocationInfo = ({ location, clearInfo, loading, error }) => {
  if (loading) {
    return (
        <div className="location-info-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="location-info-container">
      {error.message}
      </div>
    );
  }

  if (!location) {
    return null;
  }

  if (!location.places) {
    return (
      <div className="location-info-container">
        No location information available for this postal code.
      </div>
    );
  }

  return (
    <div className="location-info-container">
      <h2>Location Information</h2>
      <button onClick={clearInfo} className="search-button">Clear</button>
      <p>Country: {location.country}</p>
      <h3>Places:</h3>
      <ul>
        {location.places.map((place, index) => (
          <li key={index}>
            <p>Place Name: {place['place name']}</p>
            <p>State: {place.state}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInfo;
