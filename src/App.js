import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import AppNavbar from './components/Navigation/AppNavbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Admission from './components/Admission/Admission';

const menuItems=[
  {id:1, name: 'home', label: 'Home', route:'/'},
  {id:2, name: 'about', label: 'About', route:'/about'},
  {id:3, name: 'admission', label: 'Admission', route:'/admission'},
  
]

function App() {
  return (
    <Router>
      <div className="container">
        <AppNavbar menuItems={menuItems}/>
        <div className="container-fluid pt-5 my-4">
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About} />
          <Route path="/admission" exact component={Admission}/>
      </div>
      </div>
    </Router>
  );
}

export default App;
