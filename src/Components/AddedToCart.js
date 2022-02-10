import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Image, Row, Alert, Spinner } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa'
import { TiTickOutline } from 'react-icons/ti'
import ReduxUserCart from './ReduxUserCart';
import Footer from './Footer';

function AddedToCart(props) {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)
    const [alertShow, setAlertShow] = useState(true);

    const user = useSelector(state => state.AuthStatus.AuthUser)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response);
                setLoader(false)
                setProduct(
                    response.data
                )

            }).catch(error => {
                setLoader(false)
                setErrMsg(
                    error.message
                )

            })
    }, [])

    const { image, title, price } = product

    return loader ?
    (<div className='loader'><Spinner animation="border" variant="danger"/><h2>The product is loading. Please wait..</h2></div>) : (errMsg.length ? (<h2 className='errmsg'>{errMsg}</h2>) : (product ? (

        <div className='addedcartback'>.
        <Container>
            <div className='addedcartcontainer1'>
                {alertShow?(<Alert variant='info' onClose={() => setAlertShow(false)} dismissible className='addedcartproductdisp'>
                    <TiTickOutline size={22} /> {title} successfully added in your cart
                </Alert>): null}
                <div className='addedcartcontainer2'>
                    <Row>
                        <Col sm={6} className='addedcartproductcontainer'>
                            <Row>
                                <Col><Image src={image} className='imgclass3' /></Col>
                                <Col>
                                    <div className='addedcartproductdisp'>{title}</div>
                                    <div className='addedcartproductdisp'><FaRupeeSign size={20} /> {price}</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm>
                            <Row>
                                <Col sm><div>You Pay: <FaRupeeSign />{price}<br />(Including delivery and other charges. View Cart for details)</div></Col>
                                <Col sm>
                                    <Button variant='danger' onClick={handleShow}>VIEW CART</Button>
                                    <ReduxUserCart
                                            show={show}
                                            onHide={handleClose}
                                            userid={user.id}
                                    />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </div>
            <Footer />
        </Container>



    </div>
    ) : null));
}

export default AddedToCart;
