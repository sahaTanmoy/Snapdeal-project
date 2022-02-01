import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer';


function ProductContainer() {
    const [products, setProducts] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                console.log(response);
                setLoader(false)
                setProducts(
                    response.data
                )

            }).catch(error => {
                setLoader(false)
                setErrMsg(
                    error.message
                )

            })
    }, [])
    

    return loader ? (
        <div className='loader'><Spinner animation="border" /><h2>loading..</h2></div>
    ) : errMsg.length ? (
        <h2 className='errmsg'>{errMsg}</h2>
    ) : (products.length ? (
        <div>
            <br /><h2>Our Products</h2><br />
            
            <Container>
                
                <Row>

                    {
                        products.map(product =>

                            <Col className='mb-5'>



                                <Card style={{ width: '20rem' }} >
                                    <Link to={`/products/${product.id}`} className='deco'>
                                        <Card.Img variant="top" src={product.image} className='imgclass' />
                                        <hr />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>

                                            <Card.Text><b><FaRupeeSign /> {product.price}</b></Card.Text>
                                            <Card.Text>Rating: {product.rating.rate}<AiOutlineStar /> ({product.rating.count})</Card.Text>
                                            <Card.Text>Category: {product.category}</Card.Text>

                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                           
                        )
                    }

                </Row>
                <Footer />

            </Container>
            
        </div>
    ):null)

}

export default ProductContainer
