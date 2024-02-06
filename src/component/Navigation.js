import {Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import React from 'react';
import '../style/secondpage.css'
import { useNavigate } from 'react-router-dom';


const Navigasi = () => {
  const navigate = useNavigate();
  function scrollToTop() {
      window.scrollTo(0,0);
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-0"
              navbarScroll
              >
                <Nav.Link className='text-black linkNav' onClick={() => {scrollToTop(); navigate('/');}}>Home</Nav.Link>
                <Nav.Link className='text-black linkNav' onClick={() => {scrollToTop(); navigate('/#');}}>About</Nav.Link>
                <Nav.Link className='text-black linkNav' onClick={() => {scrollToTop(); navigate('/#');}}>Men</Nav.Link>  
                <Nav.Link className='text-black linkNav' onClick={() => {scrollToTop(); navigate('/#');}}>Women</Nav.Link>
            </Nav>
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className='searchNav'
                />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </div>  

)
}

export default Navigasi;