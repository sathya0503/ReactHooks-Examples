import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import CounterClass from './components/CounterClass';
import Counter from './components/Counter';
import MessageCard from './components/MessageCard';
import Register from './components/Register';
import AuthUser from './components/AuthUser';
import HobbySelector from './components/HobbySelector';
import HobbySelectorRadio from './components/HobbySelectorRadio';
import ParentComponent from './components/Basics/ParentComponent';
import ParentCard from './components/intermediate/ParentCard';
import ComponentA from './components/PropsDrillingContextApi/ComponentA';

let App = () => {

  //Props driling concept hook
  // let [app, setApp] = useState({
  //   userInfo : {
  //     author : 'Sathya',
  //     channel : 'Something new'
  //   }
  // });

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
      {/* <Register/> */}
      {/* <AuthUser/> */}
      {/* <HobbySelector/> */}
      {/* <HobbySelectorRadio/> */}
      {/* <ParentComponent/> */}
      {/* <ParentCard/> */}
      {/* <ComponentA userInfo={app.userInfo}/> */}

    </React.Fragment>
  );
}

export default App;
