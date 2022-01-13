import React from 'react'
import { AiOutlineShoppingCart,AiOutlineUser } from 'react-icons/ai';

import { Container, Navbar, Nav, Image, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function NavBar2() {
    return (
        <div className='fsize2'>
            <Navbar bg="danger" variant="dark" className='navSnap'>
                    <Container>
                        <Navbar.Brand><Link to='/'><Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" /></Link></Navbar.Brand>
                        <span>
                        <InputGroup>
                            <FormControl placeholder='Search products & Brands'></FormControl>
                            <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup></span>
                        <Nav >
                            <Nav.Link href="#">
                                Cart 
                                <AiOutlineShoppingCart />

                            </Nav.Link>
                            <Nav.Link href="#">
                                Sign In
                                <AiOutlineUser />
                            </Nav.Link>
                            
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavBar2
