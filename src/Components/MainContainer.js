import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import NavBar1 from './NavBar1'
import NavBar2 from './NavBar2'
import ProductContainer from './ProductContainer'

function MainContainer() {
    return (
        <Provider store={store}>
        <div>
            {/* <h1>Snapdeal</h1> */}
            <>
                <NavBar1 />
                <NavBar2 />
                <ProductContainer />

            </>
        </div>
        </Provider>
    )
}

export default MainContainer
