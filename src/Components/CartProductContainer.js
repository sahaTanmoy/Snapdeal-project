import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchCartProductDetails } from '../redux/Products/cartProductDetailsActions'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'


import { fetchUserCart } from '../redux/Products/userCartActions'


function CartProductContainer(props) {
    // console.log(999,props,props.individualProduct.product.id);
    console.log(999999999,props);
    // console.log(111,props.individualCartProduct.cartproduct.map(cartproduct=>cartproduct.id));
    useEffect(() => {
        // console.log(props.fetchProductDetails(props.id),props.individualProduct)
        props.fetchCartProductDetails(props.id)
    }, []);
    
  return <div>

      {/* <p>ID:{props.id},QUANTITY: {props.quantity},{props.individualProduct.product.id}</p> */}
      {/* <p>ID:{props.id},QUANTITY: {props.quantity},{props.individualCartProduct.cartproduct.id}</p> */}
      {props.individualCartProduct.cartproduct.filter(cartproduct=>(props.id===cartproduct.id)).map(cartproduct=>
            <div key={cartproduct.id}>
                
                <Table>
                    <>
                        <tr>
                            <td><img  src={cartproduct.image} className="imgclass"></img></td>
                            <td>
                                <tr><h1>
                                    {/* <Link to={`/products/${cartproduct.id}`} className='deco'> */}
                                        {cartproduct.title}
                                    {/* </Link> */}
                                </h1></tr>
                                <tr>
                                    <td><h3><FaRupeeSign />{cartproduct.price}</h3>per item</td>
                                    <td>QUANTITY:{props.quantity}</td>
                                </tr>
                            </td>
                        </tr>
                    </>
                </Table>
                
            </div>
      )}
  </div>;
}

const mapStateToProps =state=>{
    // console.log("individualProduct3",state);
    // const individualProduct=[]
    return{
        // cart: state.cart,
        // individualProduct: state.product 
        individualCartProduct: state.cartproduct 
    }
}

const mapDispatchToProps =dispatch=>{
    return{
        // fetchUserCart:(userid)=> dispatch(fetchUserCart(userid)),
        // fetchProductDetails:(id)=>dispatch(fetchProductDetails(id))
        fetchCartProductDetails:(id)=>dispatch(fetchCartProductDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartProductContainer)

// export default Demo;
