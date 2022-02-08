import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Table, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { connect, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { fetchCartProductDetails, removeSelectedCartProduct } from '../redux/Products/cartProductDetailsActions'
// import { fetchProductDetails } from '../redux/Products/productDetailsActions'


// import { fetchUserCart } from '../redux/Products/userCartActions'


function CartProductContainer(props) {
    
    console.log(999999999, props);
    // const [total,setTotal] = useState(0)

    // const user = useSelector(state => state.AuthStatus.AuthUser)
    // const cart = useSelector(state => state.cart.cart)

    const user = props.user
    const cart = props.cart

    const navigate = useNavigate()

    var currentdate = new Date();
    var currdate = currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1)
        + "-" + currentdate.getDate()

    
    useEffect(() => {
        
        props.fetchCartProductDetails(props.id)
        return () => {
            console.log(5555555555555, "cleanup");
            props.removeSelectedCartProduct()
        }
    }, []);
    const handleDecrease = (id) => {
        // cart.length?(cart.findIndex(cart=>cart.date===currdate)===-1?null:
        (cart.map(cart => 
            // cart.date === currdate ?
            
            (cart.products.length ?
                (cart.products.findIndex(pro => (pro.productId === id)) === -1 ?
                    null :
                    (cart.products.map(pro => (pro.productId === id) ?
                        pro.quantity != 1 ? (pro.quantity = pro.quantity - 1) : alert(`Item has Quantity ${pro.quantity}. Cannot Decrease Quantity. Try to remove Item`) :
                        null)
                        // (cart.products.splice(cart.products.findIndex(pro=>(pro.productId===id),1))
                    )
                ) :
                null) 
                // : null
                // alert(`Cart is Backdated. Can't Update. Try to update cart of Date: ${currdate}`)
                ))
        // ):null
        // alert(`Id: ${id}, Qty: ${qty}`)
        navigate(`/user/${user.id}/usercart`)
    }

    const handleIncrease = (id) => {
        // cart.length?
        (cart.map(cart => 
            // cart.date === currdate ?
            (cart.products.length ?
                // (cart.products.findIndex(pro => (pro.productId === id)) === -1 ?
                //     null :
                    (cart.products.map(pro => (pro.productId === id) ? (pro.quantity = pro.quantity + 1) 
                    :null)
                        // (cart.products.splice(cart.products.findIndex(pro=>(pro.productId===id),1))
                    // )
                ) :
                null) 
                // : null
                // alert(`Cart is Backdated. Can't Update. Try to update cart of Date: ${currdate}`)
                ))
        // :null
        // alert(`Id: ${id}, Qty: ${qty}`)
        navigate(`/user/${user.id}/usercart`)
    }

    const handleRemove = (id) => {
        // cart.length?(cart.findIndex(cart=>cart.date===currdate)===-1?null:
        (cart.map(cart => 
            // cart.date === currdate ?
            (cart.products.length?
                (cart.products.findIndex(pro => (pro.productId === id)) === -1 ?
                    null :
                    
                    (cart.products.map(pro => (pro.productId === id)?(cart.products.splice(cart.products.findIndex(pro=>(pro.productId===id)),1)):null
                ))) :
                null) 
                // : null
                // alert(`Cart is Backdated. Can't Update. Try to update cart of Date: ${currdate}`)
                ))
        // ):null
        // alert(`Id: ${id}, Qty: ${qty}`)
        navigate(`/user/${user.id}/usercart`)
    }

    return <div>

        {props.individualCartProduct.loading?(<Spinner animation="border" variant="danger" />):(
        props.individualCartProduct.cartproduct.filter(cartproduct => (props.id === cartproduct.id)).map(cartproduct =>
            <div key={cartproduct.id}>
                
                {/* <Row className='cartitembox'>
                    <Col sm={4} className='cartimgbox'>
                        <Image src={cartproduct.image} className="imgclass" alt={cartproduct.title} />
                    </Col>
                    <Col sm>
                        <Row>
                            <h1>{cartproduct.title}</h1>
                        </Row>
                        <Row>
                            <Col sm>Price: <FaRupeeSign />{cartproduct.price} per item</Col>
                            <Col sm>
                                <ButtonGroup >
                                    <Button variant="outline-danger" onClick={() => handleDecrease(cartproduct.id)}>-</Button>
                                    <Button variant="outline-danger" disabled>{props.quantity}</Button>
                                    <Button variant="outline-danger" onClick={() => handleIncrease(cartproduct.id)}>+</Button>
                                </ButtonGroup>

                            </Col>
                        </Row>
                        <Row>
                            <h3>Total Price: <FaRupeeSign />{cartproduct.price * props.quantity}</h3>
                        </Row>
                        <Button variant="danger" onClick={() => handleRemove(cartproduct.id)}>Remove item</Button>
                    </Col>
                </Row> */}

                <>
                <Table>
                    <tbody>
                        <tr>
                            <td className='cartitemimgcontainer'><Image src={cartproduct.image} className="imgclass2" alt={cartproduct.title} /></td>
                            <td className='cartitemtitlecontainer'> 
                                <tr>{cartproduct.title}</tr>
                                <tr><Button variant="light" onClick={() => handleRemove(cartproduct.id)}><AiOutlineClose /> Remove</Button></tr>
                            </td>
                            <td className='cartitempricecontainer'><FaRupeeSign />{cartproduct.price}</td>
                            <td className='cartitemqtycontainer'>
                            <ButtonGroup >
                                    <Button variant="light" onClick={() => handleDecrease(cartproduct.id)}>-</Button>
                                    <Button variant="light" disabled>{props.quantity}</Button>
                                    <Button variant="light" onClick={() => handleIncrease(cartproduct.id)}>+</Button>
                                </ButtonGroup>
                            </td>
                            <td><FaRupeeSign />{cartproduct.price * props.quantity}</td>
                            
                        </tr>
                    </tbody>
                </Table>
                </>
                
            </div>
            
        ))}
        
    </div>;
}

const mapStateToProps = state => {
    console.log(66, state);
    // const individualProduct=[]
    return {
        // cart: state.cart,
        // individualProduct: state.product 
        individualCartProduct: state.cartproduct,
        user: state.AuthStatus.AuthUser,
        cart: state.cart.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserCart:(userid)=> dispatch(fetchUserCart(userid)),
        // fetchProductDetails:(id)=>dispatch(fetchProductDetails(id))
        fetchCartProductDetails: (id) => dispatch(fetchCartProductDetails(id)),
        removeSelectedCartProduct: () => dispatch(removeSelectedCartProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProductContainer)

// export default Demo;
