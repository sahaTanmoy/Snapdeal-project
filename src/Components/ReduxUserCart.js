import React, { useEffect, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'

// import { fetchUserCart } from '../redux/Products/userCartActions'
import CartProductContainer from './CartProductContainer'
import Footer from './Footer'

function ReduxUserCart() {
    const { userid } = useParams()
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    const totalCart=cart&&cart.cart
    
    const totalCart2=totalCart.filter(cart=>(cart.userId===parseInt(userid)))
    console.log(parseInt(userid));
    console.log(totalCart);
    console.log(totalCart2);

    return cart.loading?(<div className='loader'><Spinner animation="border" /><h2>Loading..</h2></div>):(cart.error?(<h2 className='errmsg'>{cart.error}</h2>):(
        
        <div className='cart'>
            {status?(
            <Container>
            <h1>Cart</h1>
            {
                totalCart2.length?
                totalCart2.map(cart=>
                <div key={cart.id}>
                    <div className='cartbox'>
                    <br />
                    <h5>User Id: {cart.userId}</h5>
                    <h5>Cart Date:{cart.date.slice(0,10)}</h5>
                    
                    {
                        cart.products.map(pro=>
                            <div key={pro.productId}>
                                <hr />
                                
                                <CartProductContainer id={pro.productId} quantity={pro.quantity}/>
                                   
                            </div>
                            
                            )
                            
                    }
                    
                    <br />
                    </div><br />
                </div>
                )
                :<h1>The Cart is empty</h1>
            }
            
            <br /><br />
            <Footer />
            </Container>):navigate("/login")}
        </div>
    ))
}

export default (ReduxUserCart)
