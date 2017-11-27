import React from 'react';

const Home = ({ handleLogout }) => {
  console.log("yyy", handleLogout);
  return [
  <h1 key="home-heading"> Welcome Shachy </h1>,
  <button key="lgout-btn" onClick={handleLogout}>Logout</button>,
];
}

export default Home;
