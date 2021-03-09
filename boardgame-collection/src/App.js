import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Games from './features/Games';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


class App extends Component {
  render() {
    return (
    
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Games} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    
    );
  }
  
}

export default App;
