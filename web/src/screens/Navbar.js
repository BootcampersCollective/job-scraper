import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: yellow;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: grey;

        &:hover {
            color: white;
        }
    }
`;

const NavBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>Job Scraper</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link >Back End</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link>Full Stack</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link>Server</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
export default NavBar;