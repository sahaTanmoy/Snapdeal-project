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
    console.log(9897,props.individualCartProduct);

    const navigate = useNavigate()

    var currentdate = new Date();
    var currdate = currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1)
        + "-" + currentdate.getDate()

    const [decreaseMsg,setDecreaseMsg]=useState('')

    var length

    
    useEffect(() => {
        
        props.fetchCartProductDetails(props.id)
        return () => {
            console.log(5555555555555, "cleanup");
            props.removeSelectedCartProduct()
        }
    }, [props.id]);
    const handleDecrease = (id) => {
        // cart.length?(cart.findIndex(cart=>cart.date===currdate)===-1?null:
        (cart.map(cart => 
            // cart.date === currdate ?
            
            (cart.products.length ?
                (cart.products.findIndex(pro => (pro.productId === id)) === -1 ?
                    null :
                    (cart.products.map(pro => (pro.productId === id) ?
                        pro.quantity != 1 ? (pro.quantity = pro.quantity - 1) : setDecreaseMsg(`Item has Quantity ${pro.quantity}. Cannot Decrease Quantity. Try to remove Item`) :
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
        navigate(`/`)
    }

    const handleIncrease = (id) => {
        // cart.length?
        (cart.map(cart => 
            // cart.date === currdate ?
            (cart.products.length ?
                // (cart.products.findIndex(pro => (pro.productId === id)) === -1 ?
                //     null :
                    (cart.products.map(pro => (pro.productId === id) ? ((pro.quantity = pro.quantity + 1),setDecreaseMsg('')) 
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
        navigate(`/`)
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
        navigate(`/`)
    }

    return <div>

        {props.individualCartProduct.loading?(<Spinner animation="border" variant="danger" />):(
        props.individualCartProduct.cartproduct.filter(cartproduct => (props.id === cartproduct.id)).map(cartproduct =>
            <div key={cartproduct.id}>

                <>
                <Table responsive>
                    <tbody>
                        <tr>
                            <td className='cartitemimgcontainer'><Image src={cartproduct.image} className="imgclass2" alt={cartproduct.title} /></td>
                            <td className='cartitemtitlecontainer'> 
                                <tr>{cartproduct.title}</tr>
                                <tr><Button variant="light" onClick={() => handleRemove(cartproduct.id)} ><div className='tablermvbtn'><AiOutlineClose size={23} /> Remove</div></Button></tr>
                            </td>
                            <td className='cartitempricecontainer'><div className='tableprice'><FaRupeeSign />{cartproduct.price}</div></td>
                            <td className='cartitemqtycontainer'>
                            <ButtonGroup >
                                    <Button variant="light" onClick={() => handleDecrease(cartproduct.id)}>-</Button>
                                    <Button variant="light" disabled>{props.quantity}</Button>
                                    <Button variant="light" onClick={() => handleIncrease(cartproduct.id)}>+</Button>
                                </ButtonGroup>
                                <div className='decreasemsg'>{decreaseMsg}</div>
                            </td>
                            <td><div className='tableprice'><FaRupeeSign />{cartproduct.price * props.quantity}</div></td>
                            {/* {length+cartproduct.price * props.quantity} */}
                            
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
