import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';

function App() {
  return (
    <div className="App wrapper">
      <Router>
        <Home path="/home" />
        <Home path="/:word" />
        <Home path="/:word/:font/:bground" />
      </Router>
    </div>
  );
}

export default App;

// This did not work at all how I thought it would
// I had something like the following which I blew away.
// I feel like I completely missed something either in the lecture or
// on the learning platform. Did I miss something?
// So this is a verbatim copy of the solution. I don't like to do this, but...

{/* <Router>
  <Home path="/home" />
  <PageOne path="/:word" />
  <PageTwo path="/:word/:font/:bground" />
</Router> */}
