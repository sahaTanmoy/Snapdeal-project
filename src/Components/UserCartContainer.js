import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUserCart } from '../redux/Products/userCartActions'

function UserCartContainer({cart,fetchUserCart}) {
    const { userid } = useParams()
    useEffect(() => {
        fetchUserCart(userid)
    }, [])
    console.log(cart);
    const totalCart=cart&&cart.cart&&cart.cart
    console.log("Total cart of user",userid, ":" ,totalCart);
    // const totalCart2=totalCart&&totalCart.products&&totalCart.products
    // console.log("Products",totalCart2);
    return (
        <div>
            {
                totalCart.map(cart=>
                <div key={cart.id}>
                    <h1>User Id: {cart.userId}</h1>
                    <h1>Cart Date Time:{cart.date} Cart Id- {cart.id}</h1>
                    {
                        cart.products.map(pro=>
                            <div key={pro.productId}>
                                <h1>Product Id: {pro.productId} Quantity:{pro.quantity}</h1>
                            </div>
                            )
                            
                    }
                    <hr />
                </div>
                )
            }
            {/* {
                totalCart&&totalCart.products.map(cart=>
                <div key={cart.userid}>
                    <h1>{cart.date} - {cart.id}</h1>
                    
                </div>
                )
            } */}
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
