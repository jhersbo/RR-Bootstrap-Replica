import React from "react"
import { 
    Button,
    Nav,
    Navbar, 
    NavbarBrand, 
    NavLink
} from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"


function TopBar(){
    return(
        <Navbar bg="light" expand="lg">
            <NavbarBrand>
                <img src="../2560px-Instacart_logo.png" alt="logo"></img>
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <NavLink href='#LogIn'>Log In</NavLink>
                    <Button variant="success">Sign Up</Button>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default TopBar