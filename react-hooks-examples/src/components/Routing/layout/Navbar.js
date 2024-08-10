import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Employees from "../employees/Employees";
import EmployeeDetails from "../employees/EmployeeDetails";
import Updates from "../Stories/Updates";
import About from "./About";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let Navbars = () => {

    return (
        <React.Fragment>
            <Router>
                <nav className="navbar navbr-dark bg-dark navbar-expand-sm">
                    <div className="container">
                        <a href="/" className="navbar-brand mb-0 h1 text-white">Maya Blogs</a>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item px-4">
                                    {/* <a href="/" className="nav-link">Home</a> */}
                                    <Link to="/" className="nav-link text-white fs-5">Home</Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link to="/employees/list" className="nav-link text-white fs-5">Employees</Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link to="/updates" className="nav-link text-white fs-5">Updates</Link>
                                </li>
                                <li className="nav-item px-4">
                                    <Link to="/about" className="nav-link text-white fs-5 fw-bold">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/employees/list" element={<Employees />} />
                    <Route exact path="/employees/:userId" element={<EmployeeDetails />} />
                    <Route exact path='/updates' element={<Updates />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </Router>
        </React.Fragment>
    );

};

export default Navbars;