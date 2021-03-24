import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Games from './features/games/Games';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


const App = (props) => {
  
  return (
  
    <div className="App">
      <Navbar />
      {props.auth.isLoaded && (
        <Switch>
          <Route exact path='/' component={Games} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      )}
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
