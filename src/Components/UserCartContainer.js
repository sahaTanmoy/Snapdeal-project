import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchUserCart } from '../redux/Products/userCartActions'

function UserCartContainer({cart,fetchUserCart}) {
    const { userid } = useParams()
    useEffect(() => {
        fetchUserCart(userid)
    }, [userid])
    console.log(cart);
    const totalCart=cart&&cart.cart&&cart.cart
    console.log("Total cart of user",userid, ":" ,totalCart);
    const totalCart2=totalCart.map(
        cart=>cart.products.map(
            pro=>pro.productId
        )
    )
    console.log("Products",totalCart2);
    return (
        <div>
            <Container>
            <h1>Cart</h1>
            {
                totalCart.length?
                totalCart.map(cart=>
                <div key={cart.id}>
                    <h1>User Id: {cart.userId}</h1>
                    <h1>Cart Date Time:{cart.date} Cart Id- {cart.id}</h1>
                    {
                        cart.products.map(pro=>
                            <div key={pro.productId}>
                                <h1>Product Id: 
                                    <Link to={`/products/${pro.productId}`} className='deco'>{pro.productId} </Link>
                                    Quantity:{pro.quantity}</h1>
                            </div>
                            )
                            
                    }
                    <hr />
                    
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
            </Container>
        </div>
    )
}

const mapStateToProps =state=>{
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
