import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";

const initialState ={
  username: '',
  password: ''
}
const Login = () => {
  const [credentials, setCredentials] = useState(initialState)
  const [error, setError] = useState();
  let history = useHistory()

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = (e) => {

    e.preventDefault()

    if(credentials.username === '' || credentials.password === '') {
      setError('Both fields are Requied')
    } 
    else {
    axios.post(`http://localhost:5000/api/login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload)
      history.push('/protected')
    })
    .catch(err => {
      console.log(err)
    })
  }
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // const error = "";
  // //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
            
            
          /><br/>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            
            
          /><br/>
          <button id='submit'>Log in</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"