import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Dropdown } from 'react-bootstrap'

import { Container, Navbar, Nav, Image, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import ProductCategoryList from './ProductCategoryList';

function NavBar2() {
    // const { userid } = useParams()
    // console.log("Navbar2 id:", userid);
    return (
        <div className='fsize2 navSnap'>
            <Navbar bg="danger" variant="dark" className='navSnap' >
                <Container>
                    <Navbar.Brand><Link to='/'><Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" /></Link></Navbar.Brand>
                    <ProductCategoryList />
                    <span>

                        <InputGroup>
                            <FormControl placeholder='Search products & Brands'></FormControl>
                            <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup></span>
                    <Nav >
                        <Nav.Link href="#">
                            {/* <Link to={`/carts/user/${userid}`} className='deco'> */}
                                Cart
                            <AiOutlineShoppingCart />
                            {/* </Link> */}

                        </Nav.Link>
                        <Nav.Link>
                            {/* <Link to={`/login`} className='deco'>
                                Sign In
                                <AiOutlineUser /> */}
                                <Dropdown  variant='danger'>
                                    <Dropdown.Toggle variant='danger'>
                                    Sign In
                                <AiOutlineUser />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        
                                        <Dropdown.Item><Link to={`/login`} className='deco'>My Account</Link></Dropdown.Item>
                                        <Dropdown.Item>My Wishlist</Dropdown.Item>
                                        {/* <Dropdown.Item>My Cart</Dropdown.Item> */}
                                        
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            
                        </Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar2
