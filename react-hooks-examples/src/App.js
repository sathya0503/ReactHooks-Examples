import logo from './logo.svg';
import React from 'react';
import './App.css';

import CounterClass from './components/CounterClass';
import Counter from './components/Counter';
import MessageCard from './components/MessageCard';
import Register from './components/Register';

let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbr-dark bg-dark navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brand mb-0 h1 text-white">Maya Blogs</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item px-4">
                <a href="/" className="nav-link">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <CounterClass/>
      <br></br>
      <Counter/> */}
      {/* <MessageCard/> */}
      <Register/>
    </React.Fragment>
  );
}

export default App;
