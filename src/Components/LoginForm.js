import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap'
// import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { GrLocation } from 'react-icons/gr'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RiFileList3Line } from 'react-icons/ri'
import { connect, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { fetchUsers } from "../redux/Products/userActions"
import { isAuthenticated } from '../redux/Products/userAuthActions'
import { fetchUserCart } from '../redux/Products/userCartActions'
// import Demo from './Demo'

function LoginForm(props1) {
    const dispatch = useDispatch()

    // {userData, fetchUsers}=props1
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [entry, setEntry] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [cart, setCart] = useState([])
    const [uservalidationMsg, setUservalidationMsg] = useState("")
    const [emailErr, setEmailErr] = useState('')
    const [passErr, setPassErr] = useState('')

    useEffect(() => {
        // props1.fetchUsers()
        axios.get(`https://fakestoreapi.com/users`)
            .then(response => {
                console.log(response);
                // setLoader(false)
                setUsers(
                    response.data
                )

            }).catch(error => {
                // setLoader(false)
                console.log(error.message);
                setErrMsg(
                    error.message
                )

            })
    }, [])

    // useEffect(() => {
    //     dispatch(fetchUserCart(userid))
    // }, [])

    // const individualuser=[]


    // const individualuser = users.filter(user => ((user.email === entry.email) && (user.password === entry.password)))
    // console.log("Individualuser1:", individualuser);

    // useEffect(() => {
    //     dispatch(fetchUserCart(individualuser[0].id))
    // }, [])


    // individualuser.length ? (dispatch(isAuthenticated(true, individualuser[0]))) : dispatch(isAuthenticated(false, {}))
    // individualuser.length ? (dispatch(fetchUserCart(individualuser[0].id))) : dispatch(isAuthenticated(false, {}))

    console.log(212, entry);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (email.length === 0 || (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
            setEmailErr('**Enter a valid Email');
            entry.email = '';
            // setEntry({ ...entry,email: '' });
            // console.log(2121, "ok1");
        }
        else {
            setEmailErr('');
            entry.email = email
            // setEntry({ ...entry,email: email });
            // console.log(2121, "ok2");
        }
        if (password.length < 6) {
            setPassErr(`**Password should contain 6 characters`);
            entry.password = ''
            // setEntry({ ...entry,password: '' })
        }
        else {
            setPassErr('');
            entry.password = password
            // setEntry({ ...entry,password: password })
        }
        if ((email.length !== 0
            && (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        ) && (password.length > 5)) {
            // console.log("block executing");
            const individualuser = users.filter(user => ((user.email === entry.email) && (user.password === entry.password)))
            console.log("Individualuser1:", individualuser);
            if (users.length === 0) {
                if(errMsg.length===0){
                    setUservalidationMsg(`Authitication failed. Please try again.`)
                }
                else{
                setUservalidationMsg(`Authitication failed due to ${errMsg}. Please refresh the page and try Again.`)
                }
            } else {
                if (individualuser.length === 0) {
                    setUservalidationMsg("Enter Right Credentials")
                    dispatch(isAuthenticated(false, {}))
                }
                else {
                    individualuser.map(user => {
                        dispatch(isAuthenticated(true, user))
                        dispatch(fetchUserCart(user.id))
                    })
                    navigate(`/`, { replace: true })
                }
            }
        }
    }

    // console.log(passErr);

    return (
        <div className='loginbackcontainer'>
            <Row>
                <div >
                    <Container>
                        <div className='logformcontainer'>
                            <Row>

                                <Col sm={5}>
                                    <Row>
                                        <Col sm={2}><GrLocation className='logformicon1' size={50} /></Col>
                                        <Col sm>
                                            <h6>MANAGE YOUR ORDERS</h6>
                                            <p>
                                                Track orders, manage cancellations & returns.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={2}><RiFileList3Line className='logformicon2' size={50} /></Col>
                                        <Col sm>
                                            <h6>SHORTLIST ITEMS YOU LOVE</h6>
                                            <p>
                                                Keep items you love on a watchlist.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={2}><IoIosNotificationsOutline className='logformicon3' size={50} /></Col>
                                        <Col sm>
                                            <h6>AWESOME OFFERS UPDATES FOR YOU</h6>
                                            <p>
                                                Be first to know about great offers and save.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm>
                                    <div className='loginform'>
                                        <h4>Login On Snapdeal</h4>
                                        {/* <Form onSubmit={handleSubmitForm} > */}
                                        <Form onSubmit={handleSubmitForm}>
                                            <Form.Label className='mb-2'>Email Address</Form.Label>
                                            <Form.Control className='mb-1' type="email" placeholder='Enter Email Address'
                                                value={email} onChange={e => setEmail(e.target.value.toLowerCase())}></Form.Control>
                                            <div className='frminputerr'>{emailErr}</div>

                                            <Form.Label className='mb-2'>Password</Form.Label>
                                            <Form.Control className='mb-1' type="password" placeholder='Enter Password'
                                                value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                                            <div className='frminputerr'>{passErr}</div>
                                            <div className="d-grid gap-2">
                                                <Button className='mb-3 mt-2' variant='danger' type='submit' >Sign In</Button>
                                            </div>
                                            <div className='frminputerr'>
                                                {uservalidationMsg}
                                            </div>
                                        </Form>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </div>
            </Row>
        </div>
    )
}

export default (LoginForm)
