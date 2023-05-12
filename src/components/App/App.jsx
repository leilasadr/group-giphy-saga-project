import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Components Imports
import GIFSearch from '../GIFSearch/GIFSearch';
import FavoriteGIFs from '../FavoriteGIFs/FavoriteGIFs';


function App() {

  const GIFs = useSelector(store => store.GIFSearch);

  

  useEffect(() => {
   
    // console.log('Our GIFs from Redux', GIFs);
  }, [])

  return (

    <Router>

    <div>

      <Route exact path='/favorites'>

        <FavoriteGIFs />

      </Route>

      <Route exact path='/'>
        <GIFSearch />
      </Route>

    </div>

    </Router>

  );
}

export default App;
