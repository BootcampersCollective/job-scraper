import React from 'react'
import logo from './logo.png'
import './styles/App.css'
import Routes from './Routes'
import { Container, Navbar, Nav } from 'react-bootstrap'

function App () {
  return (
    <div className='App'>
      <>
        <Container>
          <Navbar bg='light' variant='light'>
            <Nav.Link href='/'>
              <Navbar.Brand href='/'>
                <img
                  alt='JobScraper Logo'
                  src={logo}
                  width='30'
                  height='30'
                  className='d-inline-block align-top'
                />
              Job Scraper
              </Navbar.Brand>
            </Nav.Link>
            <Nav className='mr-auto'>
              <Nav.Link href='/jobs/front-end'>Front End</Nav.Link>
              <Nav.Link href='/jobs/back-end'>Back End</Nav.Link>
              <Nav.Link href='/jobs/dev-ops'>Dev-Ops</Nav.Link>
              <Nav.Link href='/jobs/qa'>QA</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </>
      <div className='screen'>
        <Routes />
      </div>
    </div>
  )
}

export default App
