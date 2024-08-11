import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import Signup from "./Signup";


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/signup">
    //       <Signup />
    //     </Route>
    //     <Route path="/">
    //       <Login />
    //     </Route>
    //   </Routes>
    // </Router>
    <>
    <Login/>
    {/* <Signup/> */}
    </>
    
  );
}

export default App;
