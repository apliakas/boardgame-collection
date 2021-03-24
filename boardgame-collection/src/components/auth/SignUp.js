import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const initialState= {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
}

const SignUp = (props) => {
  const [credentials, setCredentials] = useState(initialState)
  const { auth, authError } = props;

  if (auth.uid) return <Redirect to='/' />

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value

    setCredentials({
      ...credentials,
      [key]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp(credentials)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign Up</h5>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' onChange={handleChange} ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={handleChange} ></input>
        </div>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input type='firstName' id='firstName' onChange={handleChange} ></input>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input type='lastName' id='lastName' onChange={handleChange} ></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      { authError && <p>{authError}</p>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);