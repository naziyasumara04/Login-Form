import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style.css';
import './Login.css';

export default function Login(){
    return(
        <div id="outer-container">
      <h2>Login Form</h2>
      <div id="container">
        <form id="loginform">
          <div id="inner-container">
            <div id="user">
              <label htmlFor="username" id="ulabel">Username:</label>
              <input className="form-control" type="text" placeholder="Enter Username" id="username" required />
            </div>
            <div id="pass">
              <label htmlFor="password" id="plabel">Password:</label>
              <input type="password" id="password" placeholder="Enter password" className="form-control" required />
            </div>
            <div id="btn">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        <h3 id="successMessage" style={{ display: 'none' }}>Successfully submitted</h3>
      </div>
    </div>
    )
}