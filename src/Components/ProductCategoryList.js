import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { fetchProductCategory } from '../redux/Products/productCategoryActions'

function ProductCategoryList({ ProductCategory, fetchProductCategory }) {

    const [categories, setCategories] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then(response => {
                console.log(response);
                setLoader(false)
                setCategories(
                    response.data
                )

            }).catch(error => {
                setLoader(false)
                setErrMsg(
                    error.message
                )

            })
    }, [])
    
    return (
        <div>
            <Dropdown align="end">
                <Dropdown.Toggle variant='danger'>
                    <AiOutlineMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item> TOP CATEGORIES </Dropdown.Item>
                    <Dropdown.Divider />
                    {loader ?(<Dropdown.Item>Loading..</Dropdown.Item>):(errMsg.length ?(<Dropdown.Item>{errMsg}</Dropdown.Item>):(
                        categories.map(Category =>
                            <div key={Category}>
                            <Dropdown.Item  className='px-5'>
                                <Link to={`/category/${Category}`} className='deco'>
                                {Category}
                                </Link>
                            </Dropdown.Item>
                            </div>
                        )))}
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default (ProductCategoryList)
