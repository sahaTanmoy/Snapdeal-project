import React, { useEffect } from 'react';
import { Button, Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, Route, useNavigate, useParams } from 'react-router-dom'
// import { fetchUsers } from "../redux/Products/userActions"


import { useSelector } from 'react-redux';
import UserProfilePersonal from './UserProfilePersonal';
import UserProfileAddress from './UserProfileAddress';
import Footer from './Footer';


function UserProfileContainer(props) {
    const status = useSelector(state => state.AuthStatus)
    const navigate = useNavigate()
    console.log(8, status);
    const { userid } = useParams()

    return <div className='profback'>
        {status.AuthStatus ? (
            <Container>
                <h1> Welcome {status.AuthUser.name.firstname} {status.AuthUser.name.lastname}</h1>
                <h1>Your User Id - {status.AuthUser.id}</h1>
                <br />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='proftabcon'>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Personal Details</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Address Details</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className='proftabback'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <UserProfilePersonal phone={status.AuthUser.phone} email={status.AuthUser.email} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <UserProfileAddress number={status.AuthUser.address.number} street={status.AuthUser.address.street} city={status.AuthUser.address.city} zipcode={status.AuthUser.address.zipcode} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    {/* <br /><br /><br /> */}
                </Tab.Container>
                <Footer />

                {/* <p>from UserProfileContainer</p> */}
                {/* <h1>Address Details:</h1>
                <h2>House No.: {status.AuthUser.address.number}</h2>
                <h2>Street: {status.AuthUser.address.street}</h2>
                <h2>City: {status.AuthUser.address.city}</h2>
                <h2>Pin Code: {status.AuthUser.address.zipcode}</h2>
                <h1>Contact Details:</h1>
                <h2>Mobile: {status.AuthUser.phone}</h2>
                <h2>Email-Id: {status.AuthUser.email}</h2> */}
                {/* <Link to={`/user/${status.AuthUser.id}/carts`} className='deco'>
                <Button variant='danger'>Show Cart</Button></Link> */}
                {/* <Button variant='danger' onClick={handleLogout}>Logout</Button> */}

            </Container>) : navigate("/login")}
    </div>;
}



export default UserProfileContainer;
