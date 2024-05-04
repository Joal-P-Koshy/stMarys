import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
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
            className="d-inline-block align-top ms-4 me-3"
            alt="React Bootstrap logo"
          />
          <h5 className="church-name text-light">St.Mary's Malankara Catholic Church Chettukuzhy</h5>
          <h6 className="church-name-small text-light mt-1">St.Mary's Church Chettukuzhy</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <Link to={'/'} className='nav-link me-3'>HOME</Link>
            <Link to={'/mma'} className='nav-link me-3'>MMA</Link>
            <Link to={'/mca'} className='nav-link me-3'>MCA</Link>
            <Link to={'/mcym'} className='nav-link me-3'>MCYM</Link>
            <Link to={'/mccl'} className='nav-link me-3'>MCCL</Link>
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  )
}

export default Header