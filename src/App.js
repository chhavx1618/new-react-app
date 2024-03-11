// App.js\
import React from 'react';
import { useState } from 'react';
import Home from './home';
import Page1 from './page1';
import Page2 from './page2';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'page1':
        return <Page1 onPageChange={setCurrentPage} />;
      case 'page2':
        return <Page2 onPageChange={setCurrentPage} />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
