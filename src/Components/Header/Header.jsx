import React from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/mcclogo.png'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-transparent shadow nav-bar">
    
        <Navbar.Brand href="#home" className='d-flex'>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top ms-3 me-1"
            alt="mcc logo"
          />
          <h5 className="church-name mt-1">St.Mary's Malankara Catholic Church Chettukuzhy</h5>
          <p className="church-name-small  mt-1">St.Mary's Church Chettukuzhy</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <Link to={'/'} className='nav-link me-3'>HOME</Link>
            <Link to={'/mcym'} className='nav-link me-3'>MCYM</Link>
            <Link to={'/mccl'} className='nav-link me-3'>MCCL</Link>
            <Link to={'/gallery'} className='nav-link me-3'>Gallery</Link>
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  )
}

export default Header