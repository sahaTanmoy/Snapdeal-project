import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'

function NavBar1() {
    return (
        <div>
                <Navbar bg="danger" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Brand Waali Quality, Bazzar  Walli deal!</Navbar.Brand>
                        <Nav >
                            <Nav.Link href="#">Impact@Snapdeal</Nav.Link>
                            <Nav.Link href="#">Gift Cards</Nav.Link>
                            <Nav.Link href="#">HelpCenter</Nav.Link>
                            <Nav.Link href="#">Sell on Snapdeal</Nav.Link>
                            <Nav.Link href="#">
                                <Image src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png" />
                                Download App
                            </Nav.Link>
                            
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavBar1
