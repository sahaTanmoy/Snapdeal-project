import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { BsPower } from 'react-icons/bs'
import { Badge, Button, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav, Image, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCategoryList from './ProductCategoryList';
// import ModalLog from './ModalLog';
import { FaRegUser } from 'react-icons/fa';
import ReduxUserCart from './ReduxUserCart';
import axios from 'axios'
import SearchProducts from './SearchProducts';
import LogoutContainer from './LogoutContainer';


function NavBar2() {
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const user = useSelector(state => state.AuthStatus.AuthUser)
    const cartProduct = useSelector(state => state.cartproduct.cartproduct)
    const cart = useSelector(state => state.cart.cart)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // var length = 0
    // for (var i = 0; i < cart.length; i++) {
    //     length = length + cart[i].products.length
    // }
    // console.log(99556622, length);

    const len = cart.length ? (cart.map(cart => cart.products.length)) : []
    console.log(15, len);
    const totallen = len.reduce((acc = 0, curr) => {
        acc = acc + curr
        return acc
    },0)
    console.log(225, totallen);
    // console.log("user", user);
    const navigate = useNavigate()

    return (

        <div className='fsize2 navSnap'>
            <Navbar bg="danger" variant="dark" className='navSnap' expand="lg">

                <Container>
                    <Navbar.Brand><Link to='/'><Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" /></Link></Navbar.Brand>
                    <ProductCategoryList />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="searchboxcontainer1 alignbase">
                            {/* <span> */}
                            <SearchProducts />
                            {/* <InputGroup>
                                <FormControl placeholder='Search products & Brands ' aria-describedby="basic-addon2" value={search} onChange={e => setSearch(e.target.value) } ></FormControl>
                                <Button variant="dark" onClick={()=> setSearchEntry(search) }>Search</Button>
                            </InputGroup> */}
                            {/* </span> */}
                        </Nav>
                        {/* <Nav></Nav> */}
                        <Nav className="alignbase">
                            {status &&
                                <Nav.Link>
                                    {/* <Link to={`/user/${user.id}/usercart`} className='deco2'> */}
                                    {/* <Link to={`/user/${user.id}/carts`} className='deco2'> */}
                                    <Button variant='danger' onClick={handleShow}>
                                        Cart
                                        <AiOutlineShoppingCart />
                                        <Badge pill bg="light" text="dark">
                                            {/* {cartProduct.length} */}
                                            {/* {length} */}
                                            {totallen}
                                        </Badge>
                                    </Button>
                                    <ReduxUserCart
                                        show={show}
                                        onHide={handleClose}
                                        userid={user.id}
                                    />
                                    {/* </Link> */}
                                </Nav.Link>}
                            <Nav.Link >
                                {/* <Link to={`/login`} className='deco'>
                                Sign In
                                <AiOutlineUser /> */}
                                {status ? (
                                    <Dropdown variant='danger' align="end" autoClose="outside">
                                        {status ? (
                                            <Dropdown.Toggle variant='danger'>
                                                {user.name.firstname}
                                                <CgProfile />
                                            </Dropdown.Toggle>) : (
                                            <Dropdown.Toggle variant='danger'>
                                                Sign In
                                                <CgProfile size={20} />
                                            </Dropdown.Toggle>
                                        )}

                                        <Dropdown.Menu variant="dark">

                                            {status &&
                                                <Dropdown.Item><Link to={`/user/${user.id}/profile`} className='deco3'>My Profile</Link></Dropdown.Item>}


                                            <Dropdown.Divider />
                                            {status &&
                                                <Dropdown.Item>
                                                    {/* <Link to={`/logout`}><BsPower />Sign out</Link> */}
                                                    <LogoutContainer />
                                                </Dropdown.Item>}
                                        </Dropdown.Menu>
                                    </Dropdown>) : (<Link to={`/login`} className='deco'><Button variant='danger'>Sign In <CgProfile size={20} /> </Button> </Link>)}

                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>

    )
}

export default NavBar2
