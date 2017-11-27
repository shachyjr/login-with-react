import React from 'react';

const Home = ({ handleLogout }) => [
  <h1 key="home-heading"> Welcome Shachy </h1>,
  <button key="lgout-btn" onClick={handleLogout}>Logout</button>,
];

export default Home;
