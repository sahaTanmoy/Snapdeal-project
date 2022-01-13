import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct} from "../redux/Products/productActions"

function ProductDetailsContainer() {
    const product= useSelector(state => state.product);
    const {title, description, image, price, category,rating}=product
    const {id}= useParams()
    console.log(id);
    const dispatch= useDispatch()
    // console.log(title);
    const fetchProductDetails= async ()=>{
        const response1= await axios.get(`https://fakestoreapi.com/products/${id}`)
                                    .catch(err=>{console.log("Err:",err);});
        console.log(response1.data);
        dispatch(selectedProduct(response1.data));
        

    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])
    
    return (
        <div>
            {/* <h1>{title}</h1>
            <h2>Rs. {price}</h2> */}

            <>
                <br /><br /><br /><br />
                <table>
                    <tr>
                        <td><img src={image} className='ingcls'/></td>
                        <td>
                            <tr><h1>{title}</h1></tr>
                            <tr>{description}</tr>
                            <tr>
                                <td><h3>Rating: {rating.rate}({rating.count})</h3></td>
                                <td><h3>Rs.{price}</h3></td>
                            </tr>
                        </td>
                    </tr>
                </table>
            </>
        </div>
    )
}

export default ProductDetailsContainer
