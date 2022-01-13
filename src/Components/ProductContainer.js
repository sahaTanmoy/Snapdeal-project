import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/Products/productActions'
import { FaRupeeSign } from 'react-icons/fa'
import { Link, Route, Routes } from 'react-router-dom'
import ProductDetailsContainer from './ProductDetailsContainer'

function ProductContainer({ productData, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("loading in container:", productData.loading);
    
    return productData.loading ? (
        <h2>loading..</h2>
    ) : productData.error ? (
        <h2>{productData.error}</h2>
    ) : (
        <div>
            <h2>Our Products</h2>
            <div className='container'>
                <div className='row'>
                    {
                        productData && productData.products &&
                        productData.products.map(product =>
                            <div className='col mb-5'>
                                {/* <p>{product.title} {product.price}</p> */}

                                
                                <Card style={{ width: '20rem' }}>
                                <Link to={`/products/${product.id}`}>
                                    <Card.Img variant="top" src={product.image} className='imgclass' />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        
                                        <Card.Text><b><FaRupeeSign /> {product.price}</b></Card.Text>
                                        <Card.Text>Rating: {product.rating.rate}({product.rating.count})</Card.Text>
                                        <Card.Text>Category: {product.category}</Card.Text>
                                        {/* <Button variant="primary">View Product</Button> */}
                                    </Card.Body>
                                </Link>
                                </Card>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
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
