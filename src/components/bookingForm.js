import React, { useState, useEffect } from 'react';

const BookingForm = ({ showId, showName }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
    setUserData(storedUserData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    alert(`Booking confirmed for ${showName}!`);
  };

  return (
    <div>
      <h2>Book Your Tickets For {showName}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder='Please Enter Your Name'
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder='Please Enter Your Email'
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm Your Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
