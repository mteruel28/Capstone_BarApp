import React from 'react';
import Home from './home';
import Rewards from './Rewards';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
          <Routes>

            <Route path='/' exact element={<Home/>} />
            <Route path='/rewards' exact element={<Rewards/>} />

          </Routes>
      </Router>
    </>

  );
}



export default App;



