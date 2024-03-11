import React from 'react';
import './home.css';

function Home({ onPageChange }) {
  return (
    <div className="home-container">
      <h1 className="greeting">Hello, user</h1>
      <div className="button-container">
        <button className="button disable">Home</button>
        <button onClick={() => onPageChange('page1')}className="button headlight">Accessibility Mode</button>
        <button className="button somethingelse">Something Else</button>
      </div>
    </div>
  );
}

export default Home;

