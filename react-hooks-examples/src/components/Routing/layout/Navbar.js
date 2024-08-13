import React, { useState } from "react";
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
import Counter from "../../Counter";
import Register from "../../Register";
import AuthUser from "../../AuthUser";
import HobbySelector from "../../HobbySelector";
import HobbySelectorRadio from "../../HobbySelectorRadio";
import CounterClass from "../../CounterClass";
import ParentComponent from "../../Basics/ParentComponent";
import ParentCard from "../../intermediate/ParentCard";
import ComponentA from "../../PropsDrillingContextApi/ComponentA";
import ComponentOne from "../../ContextAPI/ComponentOne";
import UserList from "../../http-axio/UserList";
import DigitalWatch from "../../lifecycle/DigitalWatch";
import ContactApp from "../../ContactApp/ContactApp";
import GithubSearchApp from "../../GithubSearchApp/GithubSearchApp";
import ButtonExample from "../../useRef/ButtomExample";
import AcceptTerms from "../../useRef/AcceptTerms";
import MessageCards from "../../use-reducer/MessageCards";

let Navbars = () => {

    //Props driling concept hook
    let [app, setApp] = useState({
        userInfo: {
            author: 'Sathya',
            channel: 'Something new'
        }
    });

    return (
        <React.Fragment>
            <Router>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/">Maya Blogs</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Event Binding"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item className="hide-text-decoration">
                                        <Link to="/counterclass" style={{textDecoration:'none'}} className="hide-text-decoration font-weight-bold fa-5">Counter with Class</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/counter" style={{textDecoration:'none'}} className="hide-text-decoration font-weight-bold fa-5">Counter with function</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Conditional Looping"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/register" style={{textDecoration:'none'}} className="fa-5">Register</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/authuser" style={{textDecoration:'none'}} className="fa-5">Auth User</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/hobbySelector" style={{textDecoration:'none'}} className="fa-5">Hobby Selector</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/hobbySelectorRadio" style={{textDecoration:'none'}} className="fa-5">HobbySelector Radio Buttons</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Component Interactions"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/parentComponent" style={{textDecoration:'none'}} className="fa-5">Parent Component</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/parentCard" style={{textDecoration:'none'}} className="fa-5">parent Card</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Topics"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/props-drilling" style={{textDecoration:'none'}} className="fa-5">Props Drilling</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/useContext" style={{textDecoration:'none'}} className="fa-5">useContext example</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/httpAxios" style={{textDecoration:'none'}} className="fa-5">Http Axios example</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/useref" style={{textDecoration:'none'}} className="fa-5">Use Ref</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/agreeterms" style={{textDecoration:'none'}} className="fa-5">Accept Terms</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/usereducer" style={{textDecoration:'none'}} className="fa-5">Use Reducer</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Hands-on"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/digitalwatch" style={{textDecoration:'none'}} className="fa-5">Digital Watch</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/contactApp" style={{textDecoration:'none'}} className="fa-5">Contact App</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/githubSearchApp" style={{textDecoration:'none'}} className="fa-5">Github Search App</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/counterclass" element={<CounterClass />} />
                    <Route exact path="/counter" element={<Counter />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/authuser" element={<AuthUser />} />
                    <Route exact path="/hobbySelectorRadio" element={<HobbySelectorRadio />} />
                    <Route exact path="/hobbySelector" element={<HobbySelector />} />
                    <Route exact path="/parentComponent" element={<ParentComponent />} />
                    <Route exact path="/parentCard" element={<ParentCard />} />
                    <Route exact path="/props-drilling" element={<ComponentA userInfo={app.userInfo} />} />
                    <Route exact path="/useContext" element={<ComponentOne />} />
                    <Route exact path="/httpAxios" element={<UserList />} />
                    <Route exact path="/useref" element={<ButtonExample />} />
                    <Route exact path="/usereducer" element={<MessageCards />} />
                    <Route exact path="/digitalwatch" element={<DigitalWatch />} />
                    <Route exact path="/contactApp" element={<ContactApp />} />
                    <Route exact path="/githubSearchApp" element={<GithubSearchApp />} />
                    <Route exact path="/agreeterms" element={<AcceptTerms />} />
                    
                </Routes>
            </Router>
        </React.Fragment>
    );

};

export default Navbars;