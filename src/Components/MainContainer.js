import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '../redux/store'
import CategoryProductContainer from './CategoryProductContainer'
import LoginForm from './LoginForm'
import NavBar1 from './NavBar1'
import NavBar2 from './NavBar2'
import ProductCategoryList from './ProductCategoryList'
import ProductContainer from './ProductContainer'
import ProductDetailsContainer from './ProductDetailsContainer'

function MainContainer() {
    return (
        
        <Provider store={store}>
        <BrowserRouter>
        <div>
            {/* <h1>Snapdeal</h1> */}
            <NavBar1 />
                <div className='navbar2cls'>
                    <NavBar2 />
                </div>
            
                {/* <ProductContainer /> */}
            <Routes>
                    <Route path="/" exact element={<ProductContainer />} />
                    <Route path="/products/:id" element={<ProductDetailsContainer />} />
                    <Route path="/category/:category" element={<CategoryProductContainer />} />
                    <Route path="/login" element={<LoginForm />} />
            </Routes>
        </div>
        </BrowserRouter>
        </Provider>
        
    )
}

export default MainContainer
