import React from 'react';
import Home from './home';
import Rewards from './Rewards';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Shoppingcart from './Shoppingcart';
import Wines from './Wines';
import Mixers from './Mixers.js';
import Spirits from './Spirits';
import BeersandSeltzers from './BeersSeltzers';
import Whiskey from './spiritsfolder/Whiskey';



function App() {
  return (
    <>
      <Router>
          <Routes>

            <Route path='/' exact element={<Home/>} />
            <Route path='/rewards' exact element={<Rewards/>} />
            <Route path='/shoppingcart' exact element={<Shoppingcart/>} />
            <Route path='/wines' exact element={<Wines/>} />
            <Route path='/spirits' exact element={<Spirits/>} />
            <Route path='/beersandseltzers' exact element={<BeersandSeltzers/>} />
            <Route path='/mixersandmisc' exact element={<Mixers/>} />
            <Route path='/Whiskeys' exact element={<Whiskey/>} />

          </Routes>
      </Router>
    </>

  );
}



export default App;



