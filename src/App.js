import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Serve error please try again', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="mb-4 text-center">TV Shows</h1>
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/details/:showId" element={<ShowDetails shows={shows} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
