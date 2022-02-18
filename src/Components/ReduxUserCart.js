import React, { useEffect, useState } from 'react'
import { Button, Container, Spinner, Table, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'

// import { fetchUserCart } from '../redux/Products/userCartActions'
import CartProductContainer from './CartProductContainer'
import Footer from './Footer'

function ReduxUserCart(props) {
    // const { userid } = useParams()
    const {userid} = props
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const cart = useSelector(state => state.cart.cart)
    const navigate = useNavigate()

    const len = cart.length ? (cart.map(cart => cart.products.length)) : []
    console.log(15, len);
    const totallen = len.reduce((acc = 0, curr) => {
        acc = acc + curr
        return acc
    },0)
    console.log(226, totallen);

    const totalCart = cart 

    const totalCart2 = totalCart.filter(cart => (cart.userId === parseInt(userid)))
    console.log(parseInt(userid));
    console.log(totalCart);
    console.log(totalCart2);

    return ((

        <div className='cart'>
            {status ? (
                <Container>
                    
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-lg"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-lg">
                            Shopping Cart
                            ({totallen} {totallen>1?"items":"item"})
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <>
                            <Table>
                                <thead className='carttableheadcontainer'>
                                    <tr>
                                        <td colSpan={3} className='cartitemdetailcontainer'>Item Details        </td>
                                        
                                        <td className='cartitempricecontainer'>Price</td>
                                        <td className='cartitemqtycontainer'>Quantity</td>
                                        <td className='cartitempricecontainer'>Subtotal</td>
                                    </tr>
                                </thead>
                            </Table>
                        </>
                        {
                            totalCart2.length ?
                                totalCart2.map(cart =>
                                    <div key={cart.id}>

                                        {
                                            cart.products.map(pro =>
                                                <div key={pro.productId}>
                                                    

                                                    <CartProductContainer id={pro.productId} quantity={pro.quantity} />

                                                </div>

                                            )

                                        }

                                        
                                    </div>
                                )
                                : <h1>The Cart is empty</h1>
                        }
                        </Modal.Body>
                        
                    </Modal>
                    
                </Container>
                ) : navigate("/login")}
        </div>
    )
    )
}

export default (ReduxUserCart)
