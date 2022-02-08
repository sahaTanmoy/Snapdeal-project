import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '../redux/store'

import CategoryProductContainer from './CategoryProductContainer'
import ReduxUserCart from './ReduxUserCart'
import LoginForm from './LoginForm'
import LogoutContainer from './LogoutContainer'
import ModalLog from './ModalLog'
import NavBar1 from './NavBar1'
import NavBar2 from './NavBar2'
import NoMatch from './NoMatch'
// import ProductCategoryList from './ProductCategoryList'
import ProductContainer from './ProductContainer'
import ProductDetailsContainer from './ProductDetailsContainer'
import UserCartContainer from './UserCartContainer'
import UserProfileContainer from './UserProfileContainer'
import Demo from './Demo'

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
                    {/* <Route path="/login" element={<ModalLog />} /> */}
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/magnify" element={<Demo />} />
                    <Route path="/user/:userid/carts" element={<UserCartContainer />} />
                    <Route path="/user/:userid/profile" element={<UserProfileContainer />} />
                    <Route path="/logout" element={<LogoutContainer />} />
                    <Route path="*" element={<NoMatch />} />
                    <Route path="/user/:userid/usercart" element={<ReduxUserCart />} />
            </Routes>
            
        </div>
        
        
        </BrowserRouter>
        
        </Provider>
        
        
    )
}

export default MainContainer
