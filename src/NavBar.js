//TODO: Implement scroll animation that the navbar will only appear

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.css"
function NavBar(){
    return (
        <div className="NavBox">
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary">
            <Container fluid className="NavBar">
                <Navbar.Brand href="#">Parsa Divanbeigi</Navbar.Brand>
                <div className="NavBar">
                <Navbar.Toggle aria-controls="navbarScroll" className="NavBar" />

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="NavBar">About Me</Nav.Link>
                        <Nav.Link href="#action2">Projects</Nav.Link>
                        <Nav.Link href="#action3">Clients</Nav.Link>
                        <Nav.Link href="#action4">Work Experience</Nav.Link>
                        <Nav.Link href="#action5">Contact me</Nav.Link>

                    </Nav>
                </div>
            </Container>
        </Navbar>
        </div>
    );
}



export default NavBar;