import React, { useEffect } from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchCartProductDetails, removeSelectedCartProduct } from '../redux/Products/cartProductDetailsActions'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'


import { fetchUserCart } from '../redux/Products/userCartActions'


function CartProductContainer(props) {
    // console.log(999,props,props.individualProduct.product.id);
    console.log(999999999,props);
    // console.log(111,props.individualCartProduct.cartproduct.map(cartproduct=>cartproduct.id));
    useEffect(() => {
        // console.log(props.fetchProductDetails(props.id),props.individualProduct)
        props.fetchCartProductDetails(props.id)
        return ()=>{
            console.log(5555555555555,"cleanup");
            props.removeSelectedCartProduct()
        }
    }, []);
    
  return <div>

      {/* <p>ID:{props.id},QUANTITY: {props.quantity},{props.individualProduct.product.id}</p> */}
      {/* <p>ID:{props.id},QUANTITY: {props.quantity},{props.individualCartProduct.cartproduct.id}</p> */}
      {props.individualCartProduct.cartproduct.filter(cartproduct=>(props.id===cartproduct.id)).map(cartproduct=>
            <div key={cartproduct.id}>
                
                <Row className='cartitembox'>
                    <Col sm={4} className='cartimgbox'>
                        <Image src={cartproduct.image} className="imgclass" alt={cartproduct.title} />
                    </Col>
                    <Col sm>
                        <Row>
                        <h1>{cartproduct.title}</h1>
                        </Row>
                        <Row>
                            <Col sm>Price: <FaRupeeSign />{cartproduct.price} per item</Col>
                            <Col sm>QUANTITY: {props.quantity}</Col>
                        </Row>
                        <Row>
                        <h3>Total Price: <FaRupeeSign />{cartproduct.price * props.quantity }</h3>
                        </Row>
                    </Col>
                </Row>
                
            </div>
      )}
  </div>;
}

const mapStateToProps =state=>{
    console.log(66,state);
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
        fetchCartProductDetails:(id)=>dispatch(fetchCartProductDetails(id)),
        removeSelectedCartProduct:()=>dispatch(removeSelectedCartProduct())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartProductContainer)

// export default Demo;
