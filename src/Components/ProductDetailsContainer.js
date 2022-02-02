import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
// import { fetchProductDetails } from "../redux/Products/productDetailsActions"
import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import cartProductDetailsReducer from '../redux/Products/cartProductDetailsReducer';
import Footer from './Footer';


function ProductDetailsContainer() {
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const user = useSelector(state => state.AuthStatus.AuthUser)
    const cart = useSelector(state => state.cart.cart)
    
    const { id } = useParams()
    const navigate = useNavigate()


    var currentdate = new Date();
    var currdate = currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1)
        + "-" + currentdate.getDate()
    var currtime = currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(currdate, currtime);
    
    // console.log(id);

    const [particularProduct, setParticularProduct] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response);
                setLoader(false)
                setParticularProduct(
                    response.data
                )

            }).catch(error => {
                setLoader(false)
                setErrMsg(
                    error.message
                )

            })
    }, [])

    const handleAddCart = () => {
        cart.length?

        (cart.findIndex(cart=>cart.date===currdate)===-1?
        (cart.push(                         
                {
                    id: 50,
                    userId: user.id,
                    date: currdate,
                    products: [{ "productId": particularProduct.id, "quantity": 1 }]
                }
            )):           
        (cart.map(cart=>cart.date===currdate?
        (cart.products.length?(cart.products.findIndex(pro=>(pro.productId===particularProduct.id))===-1?(cart.products.push({ "productId": particularProduct.id, "quantity": 1 })):
            (cart.products.map(pro=>(pro.productId===particularProduct.id)?(pro.quantity=pro.quantity+1):null))
        ):(cart.products.push({ "productId": particularProduct.id, "quantity": 1 }))

        // (cart.push(                         X
        //     {
        //         id: 50,
        //         userId: user.id,
        //         date: currdate,
        //         products: [{ "productId": particularProduct.id, "quantity": 1 }]
        //     }
        // ))                                  X

        ):null)
        )):
        (cart.push(
            {
                id: 50,
                userId: user.id,
                date: currdate,
                products: [{ "productId": particularProduct.id, "quantity": 1 }]
            }))
        
        alert(`${particularProduct.title} successfully added to the cart`)
        navigate(`/user/${user.id}/usercart`)
    }

    return loader ?
        (<div className='loader'><Spinner animation="border" /><h2>The product is loading. Please wait..</h2></div>) : (errMsg.length ? (<h2 className='errmsg'>{errMsg}</h2>) : (particularProduct ? (
            <div className='productback'>
                <Container>
                    <br /><br /><br /><br />
                    
                    <Row>
                        <Col sm>
                        <Image src={particularProduct.image} className='ingcls'  alt={particularProduct.title} />
                        </Col>
                        <Col sm>
                            <Row><h1>{particularProduct.title}</h1></Row>
                            <Row>{particularProduct.description}</Row>
                            <Row>
                                <Col sm><b>Category: {particularProduct.category}</b></Col>
                                <Col sm><h5>Rating: {particularProduct.rating?.rate}<AiOutlineStar /> ({particularProduct.rating && particularProduct.rating.count})</h5></Col></Row>
                                <Row><h3><FaRupeeSign /> {particularProduct.price}</h3>
                            </Row>
                            <Row>{status ?
                                (<Col>
                                <Button variant='danger' onClick={handleAddCart}>Add To Cart</Button>
                                </Col>): null}
                            </Row>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Footer />
                </Container>
            </div>
        ) : null))
}



export default (ProductDetailsContainer)
