import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'

import { fetchUserCart } from '../redux/Products/userCartActions'
import CartProductContainer from './CartProductContainer'
import Footer from './Footer'

function UserCartContainer({cart,fetchUserCart}) {
    const { userid } = useParams()
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchUserCart(userid)
    }, [])

    const totalCart=cart&&cart.cart

    return cart.loading?(<div className='loader'><Spinner animation="border" /><h2>Loading..</h2></div>):(cart.error?(<h2 className='errmsg'>{cart.error}</h2>):(
        
        <div className='cart'>
            {status?(
            <Container>
                <div className='cartbox'>
            <h1>Cart</h1>
            {
                totalCart.length?
                totalCart.map(cart=>
                <div key={cart.id}>
                    {/* <div className='cartbox'> */}
                    {/* <br />
                    <h5>User Id: {cart.userId}</h5>
                    <h5>Cart Date:{cart.date.slice(0,10)} Time:{cart.date.slice(11,19)}</h5> */}
                    {
                        cart.products.map(pro=>
                            <div key={pro.productId}>
                                <hr />
                                <CartProductContainer id={pro.productId} quantity={pro.quantity}/>
                            </div>
                            
                            )
                            
                    }
                    
                    {/* <br />
                    </div><br /> */}
                </div>
                )
                :<h1>The Cart is empty</h1>
            }
            </div>
            
            <br /><br />
            <Footer />
            </Container>):navigate("/login")}
        </div>
    ))
}

const mapStateToProps =state=>{
    console.log(6,state);
    return{
        cart: state.cart
    }
}

const mapDispatchToProps =dispatch=>{
    return{
        fetchUserCart:(userid)=> dispatch(fetchUserCart(userid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserCartContainer)
