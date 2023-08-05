import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import SignIn from './components/SignIn';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>
      {/* <NavBar title="Words Counter" />
      
      <About /> 
<Router>
  <Switch>
    <Route path="/about">
        <About />
     </Route>
       <Route path="/">
         <Textform />
       </Route>
  </Switch>
</Router> */}

    <Router>
      <NavBar title="Words Counter" />
      
      <Routes>
        <Route path="/" element={<div className="container mt-8"><Textform /></div>} />
        <Route path="/about" element={<div className="container"><About /></div>} />
        <Route path="/signup" element={<div><SignIn/></div>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
