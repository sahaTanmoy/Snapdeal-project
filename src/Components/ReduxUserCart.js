import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'

// import { fetchUserCart } from '../redux/Products/userCartActions'
import CartProductContainer from './CartProductContainer'
import Footer from './Footer'

function Demo() {
    const { userid } = useParams()
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const [cartPrice,setCartPrice]=useState(0)
    
    // useEffect(() => {
    //     fetchUserCart(userid)
    // }, [])

    
    // console.log(555,cart);

    const totalCart=cart&&cart.cart
    // const totalCart2=totalCart.map(cart=>(cart.userId))
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
                    {/* {setCartPrice(0)} */}
                    {
                        cart.products.map(pro=>
                            <div key={pro.productId}>
                                <hr />
                                {/* <h1>Product Id: 
                                    <Link to={`/products/${pro.productId}`} className='deco'>
                                        {pro.productId} 
                                    </Link>
                                </h1>
                                    
                                <h1>Quantity:{pro.quantity}</h1>
                                <h1>{title}</h1> */}
                                {/* {setCartPrice(cartPrice+pro.quantity*pro.price)} */}
                                <CartProductContainer id={pro.productId} quantity={pro.quantity}/>
                                {/* <h1>Total: {cartPrice}</h1> */}
                                
                            </div>
                            
                            )
                            
                    }
                    
                    <br />
                    </div><br />
                </div>
                )
                :<h1>The Cart is empty</h1>
            }
            
            {/* {
                totalCart&&totalCart.products.map(cart=>
                <div key={cart.userid}>
                    <h1>{cart.date} - {cart.id}</h1>
                    
                </div>
                )
            } */}
            <br /><br />
            <Footer />
            </Container>):navigate("/login")}
        </div>
    ))
}

export default (Demo)
