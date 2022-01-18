import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCategoryProducts } from '../redux/Products/categoryProductActions';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom'

function CategoryProductContainer({ cateoryProduct, fetchCategoryProducts }) {
    const { category } = useParams()
    console.log(category);
    console.log("CategoryProduct Container: ", cateoryProduct.categoryProducts);
    useEffect(() => {
        fetchCategoryProducts(category)
        // console.log(fetchCategoryProducts(category));
    }, [category])

    return (
        <div>
            <Container>
                <br/><h2>Category: {category}</h2><br/>
                <Row>

                    {cateoryProduct && cateoryProduct.categoryProducts && cateoryProduct.categoryProducts.map(product =>
                        // <h1>{product.title}</h1>
                        // <div key={product.id}>
                        <Col className='mb-5'>
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
                    )}

                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state is", state.categoryProduct);
    return {
        cateoryProduct: state.categoryProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategoryProducts: (category) => dispatch(fetchCategoryProducts(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProductContainer)
