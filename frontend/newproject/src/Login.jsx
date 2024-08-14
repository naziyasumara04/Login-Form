import React from 'react';


import './Login.css';


export default function Login(){
    return(
      <div id="outer-container">
      <h2>Login Form</h2>
      <div id="container">
        <form id="loginform" METHOD="POST" action="http://localhost:3000/login">
          <div id="inner-container">
            <div id="user">
              <label htmlFor="username" id="ulabel">Username:</label>
              <input className="form-control" type="text" placeholder="Enter Username" id="username"  name="username" required />
            </div>
            <div id="pass">
              <label htmlFor="password" id="plabel">Password:</label>
              <input type="password" id="password" placeholder="Enter password" className="form-control" name="password" required />
            </div>
            <div id="btn">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      
       <p id="newUser">New user?Sign Up here <form action="http://localhost:3000/signup" method="get"><button className="btn btn-primary">Signup</button></form></p>
      
    </div>
    )
}