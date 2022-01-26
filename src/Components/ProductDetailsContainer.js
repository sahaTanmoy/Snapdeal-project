import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from "../redux/Products/productDetailsActions"
import { Button, Container, Spinner } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';


function ProductDetailsContainer({ individualProduct, fetchProductDetails }) {
    // const product= useSelector(state => state.product);
    // const {title, description, image, price, category,rating}=product
    const { id } = useParams()
    // console.log(id);

    const particularProduct = individualProduct && individualProduct.product
    const { title, description, image, price, category, rating } = particularProduct
    // console.log("Individual Product",individualProduct);
    // console.log("particular Product",particularProduct);
    // console.log("Product Title",particularProduct.title);

    // const dispatch= useDispatch()
    // console.log(title);
    // const fetchProductDetails= async ()=>{
    //     console.log("Data fetching")
    //     const response1= await axios.get(`https://fakestoreapi.com/products/${id}`)
    //                                 .catch(err=>{console.log("Err:",err);});
    //     console.log(response1.data);
    //     dispatch(selectedProduct(response1.data));
    // }

    useEffect(() => {
        fetchProductDetails(id)
    }, [])

    return  individualProduct.loading?
    (<div className='loader'><Spinner animation="border" /><h2>The product is loading. Please wait..</h2></div>):(individualProduct.error?(<h2 className='errmsg'>{individualProduct.error}</h2>):(
        <div>
            {/* <h1>{title}</h1>
            <h2>Rs. {price}</h2> */}
            <Container>
                <br /><br /><br /><br />
                <table>
                    <>
                        <tr>
                            <td><img src={image} className='ingcls' /></td>
                            <td>
                                <tr><h1>{title}</h1></tr>
                                <tr>{description}</tr>
                                <tr><b>Category: {category}</b></tr>
                                <tr><h5>Rating: {rating?.rate}<AiOutlineStar /> ({rating && rating.count})</h5></tr>
                                <tr><h3><FaRupeeSign />. {price}</h3></tr>
                                <tr>
                                    {/* <td><h5>Rating: {rating?.rate}({rating&&rating.count})</h5></td> */}
                                    {/* <td><Button variant='danger'>Add To Cart</Button></td> */}
                                </tr>
                            </td>
                        </tr>
                    </>
                </table>

            </Container>
        </div>
    ))
}

const mapStateToProps = state => {
    // console.log("state",state);
    return {
        individualProduct: state.product
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("Dispatch function Called");
    return {
        fetchProductDetails: (id) => dispatch(fetchProductDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer)
