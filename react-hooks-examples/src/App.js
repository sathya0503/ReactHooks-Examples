import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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
import DigitalWatch from './components/lifecycle/DigitalWatch';
import ComponentOne from './components/ContextAPI/ComponentOne';
import UserList from './components/http-axio/UserList';
import ContactApp from './components/ContactApp/ContactApp';
import GithubSearchApp from './components/GithubSearchApp/GithubSearchApp';
import Navbar from './components/Routing/layout/Navbar';
import Home from './components/Routing/layout/Home';
import Employees from './components/Routing/employees/Employees';
import EmployeeDetails from './components/Routing/employees/EmployeeDetails';
import Updates from './components/Routing/Stories/Updates';
import About from './components/Routing/layout/About';
import Navbars from './components/Routing/layout/Navbar';

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

      {/* Not need to Routing module */}
      {/* <nav className="navbar navbr-dark bg-dark navbar-expand-sm">
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
      </nav> */}

      {/* ==> Event Binding */}
      {/* <CounterClass/>
      <br></br>
      <Counter/> */}
      {/* <MessageCard/> */}

      {/* ==> Conditinal looping and Component Interactions */}
      {/* <Register/> */}
      {/* <AuthUser/> */}
      {/* <HobbySelector/> */}
      {/* <HobbySelectorRadio/> */}
      {/* <ParentComponent/> */}
      {/* <ParentCard/> */}

      {/* ==> Props-drilling example */}
      {/* <ComponentA userInfo={app.userInfo}/> */}

      {/* ==> useEffect example */}
      {/* <DigitalWatch/> */}

      {/* ==> useContext example */}
      {/* <ComponentOne/> */}

      {/* ==> Http Axios */}
      {/* <UserList/> */}

      {/* ==> Contact App */}
      {/* <ContactApp/> */}

      {/* ==> Github Search App */}
      {/* <GithubSearchApp/> */}

      {/* ==> React Router -concept  */}
      <Navbars />
    </React.Fragment>
  );
}

export default App;
