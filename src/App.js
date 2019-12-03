import React from 'react';
import './App.css';
import TopMenu from './Menu/TopMenu';
import Footer from './Menu/Footer';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import About from './Table/About';
import Home from './Table/Home';
import Company from './Table/Company';


function App() {

  return (
    <Router>
    <div className="App">
    <div className = "flex-row">
      <div className = "flex-large">
        <TopMenu />
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path = '/about' component = {About}/>
          <Route  path = '/company' component = {Company}/>
        </Switch>
      </div>
    </div>
    <div align = "center" style = {{margin: 10}}>
      </div> 
      <Footer />
    </div>
    </Router>
  );
};

export default App;
