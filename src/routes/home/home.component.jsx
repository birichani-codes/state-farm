// Home.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../../components/hexagon-component/hexagon-component'; // Import your App component

const Home = () => {
  return (
    <div>
     

      {/* App component goes below the navigation */}
      <App />

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Home;
