import React from 'react';
import './assets/css/base/base.css';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
  return (
 <Router>
   <Route>
      <Home path='/'/>
   </Route>
   <Route>
      <Sobre path='/sobre'/> 
   </Route>
 </Router>
  )
}

export default App
