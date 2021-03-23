import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const initialState= {
  email: '',
  password: ''
};

const SignIn = (props) => {
  const [credentials, setCredentials] = useState(initialState)

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
    props.signIn(credentials)
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign In</h5>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' onChange={handleChange} ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={handleChange} ></input>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>{ props.authError && <p>{props.authError}</p>}</div>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);