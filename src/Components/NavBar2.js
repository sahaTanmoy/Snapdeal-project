import React from 'react'

import { Container, Navbar, Nav, Image, InputGroup, FormControl } from 'react-bootstrap'

function NavBar2() {
    return (
        <div>
            <Navbar bg="danger" variant="dark" className='navSnap'>
                    <Container>
                        <Navbar.Brand href="#home"><Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" /></Navbar.Brand>
                        <span>
                        <InputGroup>
                            <FormControl placeholder='Search products & Brands'></FormControl>
                            <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup></span>
                        <Nav >
                            <Nav.Link href="#">
                                Cart
                                <i className="fas fa-shopping-cart"></i>
                            </Nav.Link>
                            <Nav.Link href="#">Sign In</Nav.Link>



                            {/* <Nav.Link href="#">HelpCenter</Nav.Link>
                            <Nav.Link href="#">Sell on Snapdeal</Nav.Link>
                            <Nav.Link href="#">
                                <Image src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png" />
                                Download App
                            </Nav.Link> */}
                            
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavBar2
