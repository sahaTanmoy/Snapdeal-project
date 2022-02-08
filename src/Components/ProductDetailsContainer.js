import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
// import { fetchProductDetails } from "../redux/Products/productDetailsActions"
import { Button, Col, Container, Image, Row, Spinner, Tabs, Tab, Breadcrumb, FormControl, InputGroup } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md'
import cartProductDetailsReducer from '../redux/Products/cartProductDetailsReducer';
import Footer from './Footer';
import { VscWorkspaceTrusted } from 'react-icons/vsc'


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
    const [pin, setPin] = useState()
    const [deliveryMessage1, setDeliveryMessage1] = useState('')
    const [deliveryMessage2, setDeliveryMessage2] = useState('')
    const [deliveryMessage3, setDeliveryMessage3] = useState('')

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

    // if(status===true){setPin(user.address?.zipcode)}
    // console.log(451,status,pin);

    const handlePin = () => {
        if (pin.length === 0) {
            setDeliveryMessage1('')
            setDeliveryMessage2("Generally Delivery in 6-7 days.")
            setDeliveryMessage3('')
        } else if (pin.length < 6 || isNaN(pin) === true) {
            setDeliveryMessage1("**Please Enter a valid Pin Code")
            setDeliveryMessage2("Generally Delivery in 6-7 days.")
            setDeliveryMessage3('')
        } else {
            setDeliveryMessage1("Free Delivery Available")
            setDeliveryMessage2("Delivery in 4-5 days.")
            setDeliveryMessage3("Cash on Delivery also available for this location.")
        }
    }

    const handleAddCartNotlogged = () => {
        navigate("/login")
    }

    const handleAddCart = () => {
        cart.length ?

            (cart.findIndex(cart => cart.date === currdate) === -1 ?
                (cart.push(
                    {
                        id: 50,
                        userId: user.id,
                        date: currdate,
                        products: [{ "productId": particularProduct.id, "quantity": 1 }]
                    }
                )) :
                (cart.map(cart => cart.date === currdate ?
                    (cart.products.length ? (cart.products.findIndex(pro => (pro.productId === particularProduct.id)) === -1 ? (cart.products.push({ "productId": particularProduct.id, "quantity": 1 })) :
                        (cart.products.map(pro => (pro.productId === particularProduct.id) ? (pro.quantity = pro.quantity + 1) : null))
                    ) : (cart.products.push({ "productId": particularProduct.id, "quantity": 1 }))

                        // (cart.push(                         X
                        //     {
                        //         id: 50,
                        //         userId: user.id,
                        //         date: currdate,
                        //         products: [{ "productId": particularProduct.id, "quantity": 1 }]
                        //     }
                        // ))                                  X

                    ) : null)
                )) :
            (cart.push(
                {
                    id: 50,
                    userId: user.id,
                    date: currdate,
                    products: [{ "productId": particularProduct.id, "quantity": 1 }]
                }))

        navigate(`/user/${user.id}/usercart`)
    }

    return loader ?
        (<div className='loader'><Spinner animation="border" variant="danger"/><h2>The product is loading. Please wait..</h2></div>) : (errMsg.length ? (<h2 className='errmsg'>{errMsg}</h2>) : (particularProduct ? (
            <div className='productback'>
                <Container>
                    <br />
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`/category/${particularProduct.category}`}>
                            {particularProduct.category}</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{particularProduct.title}</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row className='productcontainer'>
                        <Col sm={5} className='productimgcontainer'>
                            <Row>
                                <Col sm={3}><Image src={particularProduct.image} className='ingcls2' alt={particularProduct.title} /></Col>
                                <Col sm>
                                    {/* <Image src={particularProduct.image} className='ingcls' alt={particularProduct.title} 
                            /> */}
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: `${particularProduct.title}`,
                                            isFluidWidth: true,
                                            src: `${particularProduct.image}`,
                                            srcSet: `${particularProduct.image}`,
                                            sizes: "(max-width: 80%) 100vw, (max-width: 80%) 30vw, 360px"
                                        },
                                        largeImage: {
                                            isFluidWidth: true,
                                            src: `${particularProduct.image}`,
                                            width: 1200,
                                            height: 1800
                                        },
                                        isHintEnabled: true,
                                        enlargedImageContainerDimensions: {
                                            width: '200%',
                                            height: '150%'
                                        },
                                        shouldUsePositiveSpaceLens: true
                                    }} className='ingcls' />
                                </Col>
                            </Row>

                            {/* <div className="img-wrapper">
                                <img
                                    src={particularProduct.image}
                                    alt=""
                                    className="hover-zoom"
                                />
                            </div> */}
                        </Col>
                        <Col sm className='productdescrpcontainer'>
                            <Row className='producttitlecontainer'>{particularProduct.title}</Row>
                            <Row>
                                <Col>
                                    <AiOutlineStar /> ( {particularProduct.rating?.rate} ) {particularProduct.rating && particularProduct.rating.count} Ratings
                                </Col> |
                                <Col>0 Reviews</Col> |
                                <Col>Have any Question?</Col>

                            </Row>
                            <hr className='hrpersonalise' /><br />
                            <Row>
                                <Col sm={7}>

                                    <p className='mrpparapersonalise'>MRP (Inclusive of all taxes)</p>
                                    <p className='productpricecontainer'><div className='productmrprice'><FaRupeeSign /> {particularProduct.price}</div> <div className='mx-3 productmrpoff'> {Math.floor((Math.random() * 80) + 10)}% off</div></p> 
                                </Col>
                                <Col sm>
                                    <p>Offers | Applicable on cart<br /><div className='productoffers'><MdOutlineLocalOffer className='iconback' size={25} />No offers</div></p>
                                </Col>
                            </Row>

                            <div className='productothers'>


                                <p className='parapersonalise'> Color  <br />
                                    <Image src={particularProduct.image} className='ingcls3' alt={particularProduct.title} />
                                </p>
                                <div>
                                {status ? (

                                    <div className='pb-5'>
                                        <Button variant='dark' onClick={handleAddCart} className='addcartbtn mx-2'>ADD TO CART</Button>
                                        <Button variant='danger' className='mx-2'>BUY NOW</Button><br />
                                    </div>

                                ) : (
                                <div className='pb-5'>
                                    <Button variant='dark' onClick={handleAddCartNotlogged} className='addcartbtn mx-2'>ADD TO CART</Button>
                                    <Button variant='danger' className='mx-2'>BUY NOW</Button><br />
                                    </div>
                                    )}
                                

                                </div>

                                <p className='parapersonalise'> Delivery

                                    {/* {status?setPin(user.address&&user.address.zipcode):null} */}

                                    <span><InputGroup className="ms-3 pincodecontainer">
                                        <FormControl
                                            placeholder="Enter PinCode"
                                            aria-label="Enter PinCode"
                                            aria-describedby="basic-addon2"
                                            value={pin} onChange={e => setPin(e.target.value)}
                                            variant='outline-danger'
                                        />
                                        <Button variant="dark" id="button-addon2" onClick={handlePin}>
                                            Check
                                        </Button>

                                    </InputGroup></span>
                                    <br />
                                    <div className='ms-4 pinvalidate'>{deliveryMessage1}</div>
                                </p>

                                <ul>
                                    {deliveryMessage2.length ? <li>
                                        {deliveryMessage2}
                                    </li> : null}
                                    {deliveryMessage3.length ? <li>
                                        {deliveryMessage3}
                                    </li> : null}
                                </ul><br />
                            </div><br />
                            <div className='parapersonalise'><VscWorkspaceTrusted size={21} />. 7 Days Easy Returns</div>
                            <div className='mrpparapersonalise'>Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after delivery</div>


                            {/* <Row>{particularProduct.description}</Row>
                            <Row>
                                <Col sm><b>Category: {particularProduct.category}</b></Col>
                               
                            </Row> */}

                        </Col>
                    </Row>
                    <br /><br />
                    <Row className='productcontainer'>

                        <Tabs defaultActiveKey="details" id="uncontrolled-tab-example" className="mb-3">

                            <Tab eventKey="details" title="Item Details">
                                <Row>
                                    <Col sm>
                                        <ul><li><div className='listflex'><b>Category: </b>{particularProduct.category}</div></li></ul></Col>
                                    <Col sm><ul><li><b>Description: </b>{particularProduct.description}</li></ul></Col>
                                </Row>


                            </Tab>
                            <Tab eventKey="review" title="Rating & Reviews">
                                <div className='ratereviwcontainer'>
                                    <p>Rating & Reviews</p>

                                    <Row>
                                        <Col sm className='ratecolstyle'><p><div className='ratingreviw'>{particularProduct.rating?.rate}</div>/5

                                            <br />{particularProduct.rating?.count} Ratings
                                        </p>


                                        </Col>
                                        <Col sm className='ratecolstyle'><p><div className='ratingreviw'>{Math.ceil((particularProduct.rating?.rate) / 5 * 100)}%</div>
                                            <br />Recomendations<br />
                                            Based on {particularProduct.rating?.count} Ratings</p>
                                        </Col>
                                        <Col sm className='ratecolstyle'>
                                            <Row><Col sm><Row>Do you like</Row><Row>This Item?</Row></Col>

                                                <Col sm>
                                                    <Button className='likebutton' variant='outline-dark'>Yes</Button><Button className='likebutton' variant='outline-dark'>No</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>

                        </Tabs>
                    </Row>
                    <br />
                    <Footer />
                </Container>
            </div>
        ) : null))
}



export default (ProductDetailsContainer)
