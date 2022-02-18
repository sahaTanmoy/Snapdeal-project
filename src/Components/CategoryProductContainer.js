import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { fetchCategoryProducts } from '../redux/Products/categoryProductActions';
import { Button, Card, Col, Container, Row, Spinner, Carousel, CarouselItem, Image } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom'
import Footer from './Footer';
import axios from 'axios';

function CategoryProductContainer() {
    const { category } = useParams()
    console.log(category);

    const [categoryProducts, setCategoryProducts] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {
                console.log(response);
                setLoader(false)
                setCategoryProducts(
                    response.data
                )

            }).catch(error => {
                setLoader(false)
                setErrMsg(
                    error.message
                )

            })
    }, [category])
    console.log(111111111, loader);
    console.log(111111112, categoryProducts);
    console.log(111111113, errMsg);

    return loader ? (<div className='loader'><Spinner animation="border" variant="danger"/><h2>{category} Products are loading. Please wait..</h2></div>) : errMsg.length ? (<h2 className='errmsg'>{errMsg}</h2>) : (
        categoryProducts.length ? (
            <div className='containerbody'>

                {/* <br /><br />
                <Carousel variant='dark'>
                    {categoryProducts.map(product =>
                        <Carousel.Item className='carouselitem'>
                            <Image
                                className="d-block carouselimg"
                                src={product.image}
                                alt={product.title}
                            />
                        </Carousel.Item>
                    )}
                </Carousel> */}
                <Container>
                    <br /><h2>Category: {category}</h2><br />
                    <Row>

                        {categoryProducts.map(product =>
                            // <h1>{product.title}</h1>
                            // <div key={product.id}>
                            <Col className='mb-4' sm={3}>
                                {/* <Card style={{ width: '20rem' }} >

                                    <Card.Img variant="top" src={product.image} className='imgclass' />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>

                                        <Card.Text><b><FaRupeeSign /> {product.price}</b></Card.Text>
                                        <Card.Text>Rating: {product.rating.rate}<AiOutlineStar /> ({product.rating.count})</Card.Text>
                                        <Card.Text>Category: {product.category}</Card.Text>
                                        <Link to={`/products/${product.id}`} className='deco'>
                                            <Button variant="primary">View Product</Button>
                                        </Link>
                                    </Card.Body>

                                </Card> */}
                                <div className='productcard'>
                                        <Link to={`/products/${product.id}`} className='deco1'>
                                            <Row>
                                                <div className='productcardimg'>
                                                    <Image src={product.image} className='imgclass' />
                                                </div>

                                            </Row>
                                            <Row>
                                                <div className='productcardbody'>
                                                    {product.title}<br />
                                                    <b><FaRupeeSign /> {product.price}</b><br/>
                                                    Rating: {product.rating.rate}<AiOutlineStar /> ({product.rating.count})<br/>
                                                    {/* Category: {product.category} */}
                                                </div>
                                            </Row>

                                        </Link>
                                    </div>
                            </Col>
                            // </div>
                        )}

                    </Row>
                </Container>
                <Container>
                    <Footer />

                </Container>
            </div>
        ) : null)
}

export default (CategoryProductContainer)
