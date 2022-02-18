import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'

function NavBar1() {
    return (
        <div className='fsize1'>
                <Navbar bg="danger" variant="dark" expand="lg">
                    <Container className='fsize1'>
                        <Navbar.Brand className='fsize1'>Brand Waali Quality, Bazaar  Walli deal!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav >
                            <Nav.Link href="#">Impact@Snapdeal</Nav.Link>
                            <Nav.Link href="#">Gift Cards</Nav.Link>
                            <Nav.Link href="#">HelpCenter</Nav.Link>
                            <Nav.Link href="#">Sell on Snapdeal</Nav.Link>
                            <Nav.Link href="#">
                                {/* <Image src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png" className='fsize1'/> */}
                                Download App
                            </Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavBar1
