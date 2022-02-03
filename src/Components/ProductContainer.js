import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row, Spinner, Carousel, CarouselItem, Image } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer';
import ReactPaginate from 'react-paginate';


function ProductContainer() {
    const [products, setProducts] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)
    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 6

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
                {products.slice(pageVisited, pageVisited + productsPerPage)
                    .map(product =>
                        <Carousel.Item className='carouselitem'>
                            <Image
                                className="d-block carouselimg"
                                src={product.image}
                                alt={product.title}
                            />
                        </Carousel.Item>
                    )}
            </Carousel>

            <br /><h2>Our Products</h2><br />

            <Container>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={'pgintnbtns'}
                    previousLinkClassName={'prevbtn'}
                    nextLinkClassName={'nextbtn'}
                    disabledClassName={'pgintndisabled'}
                    activeClassName={'pgintnactv'}
                />
                <br />

                <Row>

                    {
                        products.slice(pageVisited, pageVisited + productsPerPage)
                            .map(product =>

                                <Col className='mb-5' sm>



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

                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={'pgintnbtns'}
                    previousLinkClassName={'prevbtn'}
                    nextLinkClassName={'nextbtn'}
                    disabledClassName={'pgintndisabled'}
                    activeClassName={'pgintnactv'}
                />
                <Footer />

            </Container>

        </div>
    ) : null)

}

export default ProductContainer
