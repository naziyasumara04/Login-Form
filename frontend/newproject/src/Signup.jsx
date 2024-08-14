
// SignupPage.js
import React from 'react';

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form >
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
