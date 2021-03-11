import React, { useState } from 'react';

const initialState= {
  email: '',
  password: ''
}

const SignIn = () => {
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
    console.log(credentials)
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
      </form>
    </div>
  )
  
};

export default SignIn;