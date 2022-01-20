import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchProductDetails } from '../redux/Products/productDetailsActions'

import { fetchUserCart } from '../redux/Products/userCartActions'
import Demo from './Demo'

function UserCartContainer({cart,fetchUserCart}) {
    const { userid } = useParams()
    useEffect(() => {
        fetchUserCart(userid)
    }, [])

    
    // console.log(cart);

    const totalCart=cart&&cart.cart
    // console.log("Total cart of user",userid, ":" ,totalCart);

    // const totalCart2=totalCart.map(
    //     cart=>cart.products.map(
    //         pro=>pro.productId
    //         )
    //     )

        // useEffect(()=>{
        //     console.log(6666,totalCart.map(
        //         cart=>cart),totalCart.map(
        //             cart=>cart.products.map(
        //                 pro=>pro)),individualProduct);
        //     console.log(666,totalCart.map(
        //             cart=>cart.products.map(
        //                 pro=>fetchProductDetails(pro.productId)
        //             )
        //         ))
        //     // totalCart2.map(id=>fetchProductDetails(id))
        //         // console.log("Cart Products",totalCart2.productId);
        // },[])
        
    // const totalCart2=totalCart.map(
    //     cart=>cart.products.map(
    //         pro=>fetchProductDetails(pro.productId)
            
    //     )
    // )
    // console.log("Cart Products",totalCart2);

    // const particularProduct=individualProduct && individualProduct.product
    // const {title, description, image, price, category,rating,id}=particularProduct
    // useEffect(()=>{
    //     fetchProductDetails()
    // },[])


    // console.log("Individual Product",individualProduct);
    // console.log("particular Product",particularProduct);

    // console.log("Product Title",title);

    return (
        <div>
            <Container>
            <h1>Cart</h1>
            {
                totalCart.length?
                totalCart.map(cart=>
                <div key={cart.id}>
                    <hr />
                    <h5>User Id: {cart.userId}</h5>
                    <h5>Cart Date Time:{cart.date} </h5>
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
                                <Demo id={pro.productId} quantity={pro.quantity}/>
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
    // console.log("individualProduct",state.product);
    return{
        cart: state.cart,
        // individualProduct: state.product
    }
}

const mapDispatchToProps =dispatch=>{
    return{
        fetchUserCart:(userid)=> dispatch(fetchUserCart(userid)),
        // fetchProductDetails:(id)=>dispatch(fetchProductDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserCartContainer)
