import React, { useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsPower } from 'react-icons/bs'
import { Button, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav, Image, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCategoryList from './ProductCategoryList';
import ModalLog from './ModalLog';
import { FaRegUser } from 'react-icons/fa';


function NavBar2() {
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const user = useSelector(state => state.AuthStatus.AuthUser)
    console.log("user", user);
    const navigate = useNavigate()
    // const { userid } = useParams()
    // console.log("Navbar2 id:", userid);
    return (

        <div className='fsize2 navSnap'>
            <Navbar bg="danger" variant="dark" className='navSnap' expand="lg">

                <Container>
                    <Navbar.Brand><Link to='/'><Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" /></Link></Navbar.Brand>
                    <ProductCategoryList />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                    <span>

                        <InputGroup>
                            <FormControl placeholder='Search products & Brands'></FormControl>
                            <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup></span>
                    
                            {status &&
                                <Nav.Link>
                                    <Link to={`/user/${user.id}/carts`} className='deco2'>
                                        Cart
                                        <AiOutlineShoppingCart /></Link>
                                </Nav.Link>}
                            <Nav.Link >
                                {/* <Link to={`/login`} className='deco'>
                                Sign In
                                <AiOutlineUser /> */}
                                {status?(
                                <Dropdown variant='danger'>
                                    {status ? (
                                        <Dropdown.Toggle variant='danger'>
                                            {user.name.firstname}
                                            <AiOutlineUser />
                                        </Dropdown.Toggle>) : (
                                        <Dropdown.Toggle variant='danger'>
                                            Sign In
                                            <AiOutlineUser />
                                        </Dropdown.Toggle>
                                    )}

                                    <Dropdown.Menu>
                                        {!status &&
                                            <Dropdown.Item>
                                                <Link to={`/login`} className='deco'>Sign In</Link>
                                            </Dropdown.Item>}
                                        {/* <Dropdown.Item>My Wishlist</Dropdown.Item> */}
                                        {/* <Dropdown.Item>My Cart</Dropdown.Item> */}
                                        {status &&
                                            <Dropdown.Item><Link to={`/user/${user.id}/profile`} className='deco'>My Profile</Link></Dropdown.Item>}


                                        <Dropdown.Divider />
                                        {status &&
                                            <Dropdown.Item><Link to='/logout'><BsPower />Sign out</Link></Dropdown.Item>}
                                    </Dropdown.Menu>
                                </Dropdown>):(<Link to={`/login`} className='deco'><Button variant='danger'>Sign In<FaRegUser /> </Button> </Link>)}

                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>

    )
}

export default NavBar2
