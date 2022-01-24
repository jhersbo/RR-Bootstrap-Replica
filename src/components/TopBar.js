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
import Logo from '../2560px-Instacart_logo.png'
import '../App.css'


function TopBar(){
    return(
        <Navbar bg="light" expand="lg">
            <NavbarBrand style={{'margin': '5px 0 0 20px'}} href="home">
                <img src={Logo} alt="Logo" style={{'width': '10%', 'height': 'auto'}}></img>
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
            <NavbarCollapse id="basic-navbar-nav" style={{'margin': '5px 30px 5px 20px', 'textAlign': 'center', alignSelf: 'end'}}>
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <NavLink href='#LogIn' style={{'padding': '10px 10px', 'margin': '0px 10px', whiteSpace: 'nowrap'}}>Log In</NavLink>
                    <Button variant="success" style={{'padding': '10px 10px', 'backgroundColor': '#28A845', 'border': 'none', whiteSpace: 'nowrap'}}>Sign Up</Button>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default TopBar