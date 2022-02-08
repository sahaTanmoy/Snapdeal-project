import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row, Spinner, Carousel, CarouselItem, Image } from 'react-bootstrap'
import { FaRupeeSign, FaGooglePlay } from 'react-icons/fa'
import { AiOutlineStar, AiOutlineApple } from 'react-icons/ai';

import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer';
import ReactPaginate from 'react-paginate';


function ProductContainer() {
    const [products, setProducts] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)
    const [pageNumber, setPageNumber] = useState(0)

    const start = 0

    const productsPerPage = 4

    const pageVisited = pageNumber * productsPerPage
    // console.log(121,pageVisited);
    const pageCount = Math.ceil(products.length / productsPerPage)

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    // console.log(122,pageNumber);

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
            <br />
            <Carousel variant='dark'>

                <Carousel.Item className='carouselitem'>
                    <Image
                        className="d-block carouselimg"
                        src='https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg'
                        alt=''
                    />
                </Carousel.Item>

                <Carousel.Item className='carouselitem'>
                    <Image
                        className="d-block carouselimg"
                        src='https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg'
                        alt=''
                    />
                </Carousel.Item>

            </Carousel>
            <div className='containerbody'>
                <br /><h2>Our Products</h2><br />

                <Container>

                    <br />

                    <Row>

                        {
                            products.slice(start, pageVisited + productsPerPage)
                                .map(product =>

                                    <Col className='mb-4' sm={3}>



                                        {/* <Card style={{ width: '20rem', height: '32rem' }} >
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
                                                        <b><FaRupeeSign /> {product.price}</b><br />
                                                        Rating: {product.rating.rate}<AiOutlineStar /> ({product.rating.count})<br />
                                                        Category: {product.category}
                                                    </div>
                                                </Row>

                                            </Link>
                                        </div>
                                    </Col>

                                )
                        }

                    </Row>

                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Load More"}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName={'pgintnbtns'}
                        previousLinkClassName={'prevbtn'}
                        nextLinkClassName={'nextbtn'}
                        disabledClassName={'pgintndisabled'}
                        activeClassName={'pgintnactv'}
                    />
                </Container>
                <div className='downloadappbannercontainer'>
                    <Row>
                        <Col sm>
                            <div className='downloadappbannerimage'>
                                <Image src='https://i2.sdlcdn.com/img/appScreenshot@1x.png'></Image>
                            </div>
                        </Col>
                        <Col sm>
                            <Row>
                                <h1>Download Snapdeal App Now</h1>
                                <p>
                                    Fast, Simple & Delightful.<br />
                                    All it takes is 30 seconds to Download.
                                </p>
                                <div><Button variant="outline-dark" className='mx-2'>Get from<br /><AiOutlineApple /> App store</Button>
                                    <Button variant="outline-dark" className='mx-2'>Get from<br /><FaGooglePlay /> Play Store</Button>
                                </div>{/* <Image src='https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png' className='downloadappbannerbtn'></Image> */}
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Container>
                    <Footer />

                </Container>
            </div>

        </div>
    ) : null)

}

export default ProductContainer
