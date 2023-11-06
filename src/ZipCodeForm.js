
import React, { useState } from 'react';
import './ZipCodeForm.css'; 

const ZipCodeForm = ({ onSubmit }) => {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };

  const handleInputChange = (e) => {
   
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setPostalCode(numericValue);


    if (e.target.value !== numericValue) {
      setError('Postal code must contain numbers only');
    } else {
      setError('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>

        <div className="error-message" style={{marginTop:'10px',color:'red'}}>{error}</div>
      </form>
    </div>
  );
};

export default ZipCodeForm;
