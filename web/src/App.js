import React from 'react';
import logo from './logo.png';
import './styles/App.css';
import Routes from './Routes'
import {Container, Row, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
// import style from 'styled-components'

function App() {
  return (
    <div className="App">
      
      <>
        <Container> 
          <Navbar bg="light" variant="light">
            <Nav.Link href="#home">
            <Navbar.Brand href="#home">
              <img
                alt="JobScraper Logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Job Scraper
            </Navbar.Brand>
            </Nav.Link>
            <Nav className="mr-auto">
              <Nav.Link href="/front-end">Front End</Nav.Link>
              <Nav.Link href="/back-end">Back End</Nav.Link>
              <Nav.Link href="/dev-ops">Dev-Ops</Nav.Link>
              <Nav.Link href="/qa">QA</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-md-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
          </Navbar>
        </Container>
      </>
    <div className="screen">
      <Routes/>
    </div>
    </div>
  );
}

export default App;
