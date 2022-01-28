import React, { useEffect } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, Route, useNavigate, useParams } from 'react-router-dom'
import { fetchUsers } from "../redux/Products/userActions"

import { useSelector } from 'react-redux';


function UserProfileContainer(props) {
    const status = useSelector(state => state.AuthStatus)
    const navigate = useNavigate()
    console.log(8,status);
    const { userid } = useParams()

    return <div>
        {status.AuthStatus?(
        <Container>

            
            <h1> Welcome {status.AuthUser.name.firstname} {status.AuthUser.name.lastname}</h1>
            <h1>Your User Id - {status.AuthUser.id}</h1>
            {/* <p>from UserProfileContainer</p> */}
            <h1>Address Details:</h1>
            <h2>House No.: {status.AuthUser.address.number}</h2>
            <h2>Street: {status.AuthUser.address.street}</h2>
            <h2>City: {status.AuthUser.address.city}</h2>
            <h2>Pin Code: {status.AuthUser.address.zipcode}</h2>
            <h1>Contact Details:</h1>
            <h2>Mobile: {status.AuthUser.phone}</h2>
            <h2>Email-Id: {status.AuthUser.email}</h2>
            {/* <Link to={`/user/${status.AuthUser.id}/carts`} className='deco'>
                <Button variant='danger'>Show Cart</Button></Link> */}
                {/* <Button variant='danger' onClick={handleLogout}>Logout</Button> */}

        </Container>):navigate("/login")}
    </div>;
}



export default UserProfileContainer;
