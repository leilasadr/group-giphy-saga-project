import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';


// Components Imports
import GIFSearch from '../GIFSearch/GIFSearch';
import FavoriteGIFs from '../FavoriteGIFs/FavoriteGIFs';


function App() {
  return (

    <Router>

    <div>

      <Route exact path='favorites'>

        <FavoriteGIFs />

      </Route>

    </div>

    </Router>

  );
}

export default App;
