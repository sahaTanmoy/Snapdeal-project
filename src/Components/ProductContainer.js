import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/Products/productActions'

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
            <h2>Product List</h2>
            <div>

                {
                    productData && productData.products &&
                    productData.products.map(product =>
                        <div>
                            {/* <p>{product.title} {product.price}</p> */}

                            <Container>
                                <Row md={2} className='g-4'>
                                    <Col>
                                        <Card style={{ width: '25rem' }}>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>{product.description}</Card.Text>
                                                <Card.Text><b>RS. {product.price}</b></Card.Text>
                                                <Card.Text>Rating: {product.rating.rate}({product.rating.count})</Card.Text>
                                                <Button variant="primary">View Product</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                            
                        </div>
                    )
                }

            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        productData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
