import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
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
        <div className='loader'><Spinner animation="border" /><h2>loading..</h2></div>
    ) : productData.error ? (
        <h2 className='errmsg'>{productData.error}</h2>
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
                            // </div>    
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
