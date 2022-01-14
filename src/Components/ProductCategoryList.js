import React, { useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineMenu } from 'react-icons/ai'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductCategory } from '../redux/Products/productCategoryActions'

function ProductCategoryList({ ProductCategory, fetchProductCategory }) {
    useEffect(() => {
        fetchProductCategory()
    }, [])
    
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant='danger'>
                    <AiOutlineMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><b>Our Categories</b></Dropdown.Item>
                    <Dropdown.Divider />
                    {
                        ProductCategory.categories.map(Category =>
                            
                            <Dropdown.Item>
                                <Link to={`/category/${Category}`} className='deco'>
                                {Category}
                                </Link>
                            </Dropdown.Item>
                            
                        )}
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.category.categories);
    return {
        ProductCategory: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductCategory: () => dispatch(fetchProductCategory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryList)
