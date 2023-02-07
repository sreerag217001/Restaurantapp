import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="icon not found"
          src="https://cdn-icons-png.flaticon.com/512/242/242452.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        &nbsp;
        TableTop Restaurants
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header