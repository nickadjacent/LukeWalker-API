import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';

import HomePage from './views/HomePage';
import People from './views/People';
import Planets from './views/Planets';
import Starship from './views/Starship';

const App = () => {
  return (
    <div className="App">
      <Link style={{ textDecorationLine: 'none', color: 'black' }} to="/" >HomePage</Link>
      <br /><hr />
      <Router className='App'>
        <HomePage path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <Starship path="/starships/:id" />
      </Router>
    </div>
  );
};

export default App;