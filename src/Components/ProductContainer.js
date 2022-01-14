import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/Products/productActions'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom'
// import ProductDetailsContainer from './ProductDetailsContainer'

function ProductContainer({ productData, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, [])
    // console.log("loading in container:", productData.loading);
    
    return productData.loading ? (
        <h2>loading..</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <br/><h2>Our Products</h2><br/>
            {/* <div className='container'> */}
            <Container>
                {/* <div className='row'> */}
                <Row>
                    {
                        productData && productData.products &&
                        productData.products.map(product =>
                            // <div className='col mb-5'>
                            <Col className='mb-5'>
                                {/* <p>{product.title} {product.price}</p> */}

                                
                                <Card style={{ width: '20rem' }} >
                                
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
                                
                                </Card>
                            </Col>    
                            // </div>
                        )
                    }
                </Row>
                {/* </div> */}
            </Container>
            {/* </div> */}
        </div>
    )

}

const mapStateToProps = state => {
    console.log("HomeState",state.allproduct);
    return {
        productData: state.allproduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
