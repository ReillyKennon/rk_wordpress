import HomePage from './components/HomePage';
import React from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';




const App = () => (
  <div>

    <div className="container">
        <Navbar />
        <Routes />
    </div>
  </div>
)
export default App;